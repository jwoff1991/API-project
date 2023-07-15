const express = require("express");
const { Review } = require("../../db/models");
const { User } = require("../../db/models");
const { Spot } = require("../../db/models");
const { ReviewImage } = require("../../db/models");
const { SpotImage } = require("../../db/models")

const { setTokenCookie, requireAuth } = require("../../utils/auth");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validateReviewImage = [
    check("url").exists({ checkFalsy: true }),
]

const validateReview = [
  check("review")
    .exists({ checkFalsy: true })
    .withMessage("Review text is required"),
  check("stars")
    .exists({ checkFalsy: true })
    .isInt({ min: 1, max: 5 })
    .withMessage("Stars must be an integer from 1 to 5"),
  handleValidationErrors,
];

//gets all reviews based on current user
router.get("/current", async (req, res) => {
  const userId = req.user.id;
  const usersReview = await Review.findAll({
    where: { userId: userId },
    include: [
      {
        model: User,
        attributes: ["id", "firstName", "lastName"],
      },
      {
        model: Spot,
        attirbutes: [
          "id",
          "ownerId",
          "address",
          "city",
          "state",
          "country",
          "lat",
          "lng",
          "name",
          "price",
          "previewImage"
        ],
      },
      {
        model: ReviewImage,
        attributes: ['id', 'url']
      }
    ],
  });
  // console.log(usersReview.toJSON())
  if (usersReview.length > 0) {
    res.json(usersReview);
  } else {
    res.json({ message: "You do not currently have any reviews" });
  }
});


//edits a review based on reviewid
router.put('/:reviewId', validateReview, async (req, res) => {
    const reviewId = req.params.reviewId
    const oldReview = await Review.findByPk(reviewId)
    // const { id, userId, spotId, review, stars, createdAt, updatedAt } = oldReview
    console.log(oldReview)

    if(!oldReview) {
        res.status(404)
        return res.json(    {
            "message": "Review couldn't be found"
          })
    } else {
        const userId = req.user.id
        const reviewUserId = oldReview.userId
        if (userId === reviewUserId) {
            const currentDate = new Date();
            const { review, stars } = req.body

            const validReview = {
              id: oldReview.id,
              userId: oldReview.userId,
              spotId: oldReview.spotId,
              review: review || oldReview.review,
                stars: stars || oldReview.stars,
                createdAt: oldReview.createdAt,
                updatedAt: currentDate,
              }

            return res.json(validReview)
          } else {
            res.status(404);
            res.json({ message: "You do not have permission to edit this review" });
          }
        }
})

//creates an image for a review
router.post('/:reviewId/images', validateReviewImage, async (req, res) => {
    const reviewId = req.params.reviewId
    const review = await Review.findByPk(reviewId)
    const { url } = req.body


    // if(review.url.length = 10) {
    //   res.status(403)
    //   res.json({"message": "You have reached the maximun number of images allowed"})
    // }
    if(!review) {
        res.status(404)
        return res.json({ "message": "Review couldn't be found" })
    } else {
        const userId = req.user.id;
        const reviewUserId = review.userId
        if(userId === reviewUserId){
            const reviewImage = await ReviewImage.create({ reviewId, url })
            const validReviewImage = {
                id: reviewImage.id,
                url: reviewImage.url
            }
            const allReviewImages = await ReviewImage.findAll({
              where: {
                reviewId: reviewId
              }
            })
            if(allReviewImages.length >= 10) {
              res.status(403)
              res.json({'message': 'This review has the max amount of images'})
            }
            console.log(allReviewImages)
            return res.json(validReviewImage);
        } else {
            res.status(400)
            return res.json({"message": "You are not authorized to add an image to this review"})
        }
    }
})

//deletes a review
router.delete("/:reviewId", async (req, res) => {
    const review = await Review.findByPk(req.params.reviewId);
    const userId = req.user.id
    if(!review) {
      res.status(404)
      res.json({
        "message": "Review couldn't be found"
      })
    }
    const reviewUserId = review.userId
    if(userId === reviewUserId) {
        await review.destroy();
        res.json(    {
            "message": "Successfully deleted"
          })
    } else {
        res.status(403)
        res.json(    {
            "message": "You do not have permission to delete this review"
          })
    }
  });

module.exports = router;
