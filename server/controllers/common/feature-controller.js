const Feature = require('../../models/Feature')

const addFeatureImage = async (req, res) => {
    try {
        const { image } = req.body;

        const featureImage = new Feature({
            image
        })

        await featureImage.save();
        res.status(201).json({
            success: true,
            data: featureImage
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Some error occured!"
        })
    }
}

const deleteFeatureImage = async (req, res) => {
    try {
        const { id } = req.body;

        const image = await Feature.findByIdAndDelete(id);

        if (!image) return res.status(404).json({
            success: false,
            message: "Image not found"
        })

        res.status(200).json({
            success: true,
            message: "Image deleted successfully"
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Some error occured!"
        })
    }
}

const getFeatureImages = async (req, res) => {
    try {
        const images = await Feature.find({})

        res.status(200).json({
            success: true,
            data: images
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Some error occured!"
        })
    }
}

module.exports = {
    addFeatureImage,
    deleteFeatureImage,
    getFeatureImages
}