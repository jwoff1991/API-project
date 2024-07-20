const express = require("express");
const { SpotImage } = require("../../db/models");
const { Spot } = require("../../db/models");

const router = express.Router();

//deletes a spot
router.delete("/:imageId", async (req, res) => {
    const userId = req.user.id

    const spotImage = await SpotImage.findByPk(req.params.imageId, {
        include: {
            model: Spot,
        }
    })

    if(!spotImage) {
        res.status(404)
        res.json({
            "message": "Image couldn't be found"
        })
    }
    const spotOwnerId = spotImage.Spot.ownerId
    if(userId === spotOwnerId) {
        await spotImage.destroy();
        res.json(    {
            "message": "Successfully deleted"
          })
    } else {
        res.status(403)
        res.json(    {
            "message": "You do not have permission to delete this spot"
          })
    }
  });


module.exports = router;
