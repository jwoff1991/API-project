const express = require("express");
const { Review } = require("../../db/models");
const { User } = require("../../db/models");
const { Spot } = require("../../db/models");
const { ReviewImage } = require("../../db/models");

const { setTokenCookie, requireAuth } = require("../../utils/auth");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validateReviewImage = [
    check("url").exists({ checkFalsy: true }),
]

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
          "previewImage",
        ],
      },
      {
        model: ReviewImage,
        attributes: ['id', 'url']
      }
    ],
  });
  if (usersReview.length > 0) {
    res.json(usersReview);
  } else {
    res.json({ message: "You do not currently have any reviews" });
  }
});


router.post('/:reviewId/images', validateReviewImage, async (req, res) => {
    const reviewId = req.params.reviewId
    const review = await Review.findByPk(reviewId)
    const { url } = req.body

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
            return res.json(validReviewImage);
        } else {
            res.status(400)
            return res.json({"message": "You are not authorized to add an image to this review"})
        }
    }
})


module.exports = router;
