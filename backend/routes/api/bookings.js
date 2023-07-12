const express = require("express");

const { setTokenCookie, requireAuth } = require("../../utils/auth");

const { User } = require("../../db/models");
const { Spot } = require("../../db/models");
const { Booking } = require("../../db/models");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

//geta current users bookings
router.get('/current', async (req, res) => {
    const userId = req.user.id;
    const userBookings = await Booking.findAll({
        where: {
            userId: userId
        },
        include: [
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

        ]
    })

    if(userBookings.length === 0) {
        res.status(404)
        res.json({"message": "Could not find any booking for this user"})
    }

    return res.json({"Bookings": userBookings})

})




module.exports = router;
