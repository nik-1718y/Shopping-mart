const express = require("express");

const {
    addFeatureImage,
    deleteFeatureImage,
    getFeatureImages
} = require("../../controllers/common/feature-controller");

const router = express.Router();

router.post('/add', addFeatureImage);
router.post('/delete', deleteFeatureImage);
router.get('/get', getFeatureImages);

module.exports = router;