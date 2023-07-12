const express = require("express");


const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");
const { Spot } = require("../../db/models");
const { SpotImage } = require("../../db/models");
const { Review } = require("../../db/models");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validateSpot = [
  check("address")
    .exists({ checkFalsy: true })
    .withMessage("Street address is required"),
  check("city").exists({ checkFalsy: true }).withMessage("City is required"),
  check("state").exists({ checkFalsy: true }).withMessage("State is required"),
  check("country")
    .exists({ checkFalsy: true })
    .withMessage("Country is required"),
  check("lat")
    .exists({ checkFalsy: true })
    .withMessage("Latitude is not valid"),
  check("lng")
    .exists({ checkFalsy: true })
    .withMessage("Longitude is not valid"),
  check("name")
    .exists({ checkFalsy: true })
    .withMessage("Name must be less than 50 characters"),
  check("description")
    .exists({ checkFalsy: true })
    .withMessage("Description is required"),
  check("price")
    .exists({ checkFalsy: true })
    .withMessage("Price per day is required"),
  handleValidationErrors,
];

const validateSpotImage = [
  check("spotId").exists({ checkFalsy: true }),
  check("url").exists({ checkFalsy: true }),
];

const validReview = [
  check("spotId").exists({ checkFalsy: true }),
  check("userId").exists({ checkFalsy: true }),
  check("review")
    .exists({ checkFalsy: true })
    .withMessage("Review text is required"),
  check("stars")
    .exists({ checkFalsy: true })
    .withMessage("Stars must be an integer from 1 to 5"),
];

//Create a spot
router.post("/", validateSpot, async (req, res) => {
  const { address, city, state, country, lat, lng, name, description, price } =
    req.body;
  const ownerId = req.user.id;
  const spot = await Spot.create({
    ownerId,
    address,
    city,
    state,
    country,
    lat,
    lng,
    name,
    description,
    price,
  });

  const validSpot = {
    id: spot.id,
    ownerId: spot.ownerId,
    address: spot.address,
    city: spot.city,
    state: spot.state,
    country: spot.country,
    lat: spot.lat,
    lng: spot.lng,
    name: spot.name,
    description: spot.description,
    price: spot.price,
    createdAt: spot.createdAt,
    updatedAt: spot.updatedAt,
  };

  return res.json(validSpot);
});

//create a review based on spotId
router.post("/:spotId/reviews", validReview, async (req, res) => {
  const { review, stars } = req.body;
  const userId = req.user.id;
  const spotId = req.params.spotId;
  const spot = await Spot.findAll({
    where: {
      id: spotId,
    },
  });

  if (!spot) {
    res.status(404);
    return res.json({ message: "Spot couldn't be found" });
  }

  if (!review.length) {
    res.status(400);
    return res.json({ messaage: "Review text is required" });
  }
  if (stars > 5 || stars < 1) {
    res.status(400);
    return res.json({ messaage: "Stars must be an integer from 1 to 5" });
  }
  const userReviews = await Review.findAll({
    where: {
      userId: userId,
    },
  });
  if (userReviews) {
    res.status(403);
    return res.json({
      message: "User already has a review for this spot",
    });
  }

  const newReview = await Review.create({ userId, spotId, review, stars });

  const validReview = {
    id: newReview.id,
    userId: userId,
    spotId: spotId,
    review: newReview.review,
    stars: newReview.stars,
    createdAt: newReview.createdAt,
    updatedAt: newReview.updatedAt,
  };

  return res.json(validReview);
});

//gets all spots
router.get("/", async (req, res) => {
  const spots = await Spot.findAll();
  res.json(spots);
});

//gets all spots based on current user
router.get("/current", async (req, res) => {
  const userId = req.user.id;
  const usersSpots = await Spot.findAll({
    where: {
      ownerId: userId,
    },
  });
  if (usersSpots) {
    res.json(usersSpots);
  } else {
    res.json({ message: "You do not currently have any spots" });
  }
});

//returns all reviews based onb spotID

//return spot based on spot ID
router.get("/:spotId", async (req, res) => {
  const spot = await Spot.findByPk(req.params.spotId, {
    include: [
      {
        model: User,
        attributes: ["id", "firstName", "lastName"],
      },
      {
        model: SpotImage,
        attributes: ["id", "url", "preview"],
      },
    ],
  });

  if (spot) {
    res.json(spot);
  } else {
    res.status(404);
    res.json({ message: "Spot couldn't be found" });
  }
});

//adds image to a spot if user is signed in and owner of spot
router.post("/:spotId/images", validateSpotImage, async (req, res) => {
  const spotId = req.params.spotId;
  const spot = await Spot.findByPk(spotId);
  const { url, preview } = req.body;

  if (spot) {
    const userId = req.user.id;
    const ownerId = spot.ownerId;
    if (userId === ownerId) {
      const spotImage = await SpotImage.create({ spotId, url, preview });
      const validSpotImage = {
        spotId: spotImage.spotId,
        url: spotImage.url,
        preview: spotImage.preview,
      };

      return res.json(validSpotImage);
    } else {
      res.status(404);
      res.json({
        message: "You do not have permission to add an image to this spot",
      });
    }
  } else {
    res.status(404);
    res.json({ message: "Spot couldn't be found" });
  }
});

//edit a spot
router.put("/:spotId", validateSpot, async (req, res) => {
  const spot = await Spot.findByPk(req.params.spotId);

  if (spot) {
    const userId = req.user.id;
    const ownerId = spot.ownerId;
    if (userId === ownerId) {
      const {
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price,
      } = req.body;
      const currentDate = new Date();

      const editedSpot = {
        id: spot.id,
        ownerId: spot.ownerId,
        address: address || spot.address,
        city: city || spot.city,
        state: state || spot.state,
        country: country || spot.country,
        lat: lat || spot.lat,
        lng: lng || spot.lng,
        name: name || spot.name,
        description: description || spot.description,
        price: price || spot.price,
        createdAt: spot.createdAt,
        updatedAt: currentDate,
      };

      res.json(editedSpot);
    } else {
      res.status(404);
      res.json({ message: "You do not have permission to edit this spot" });
    }
  } else {
    res.status(404);
    res.json({ message: "Spot couldn't be found" });
  }
});

//deletes a spot
router.delete("/:spotId", async (req, res) => {
  const spot = await Spot.findByPk(req.params.spotId);
  await spot.destroy();
});

module.exports = router;
