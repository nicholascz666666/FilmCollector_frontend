const recommendationModel = require('../models/recommendations/model');

const addRecommendation = (userId, filmId, username, filmTitle) => {
    return recommendationModel.create({userId, filmId, username, filmTitle});
}

const removeRecommendation = (userId, filmId) => {
    return recommendationModel.findOneAndRemove({userId, filmId});
}

const getRecommendationsForUser = (userId) => {
    return recommendationModel.find({userId})
}

const getAllRecommendations = () => {
    return recommendationModel.find();
}

const IsRecommendation = (userId, filmId) => {
    return recommendationModel.countDocuments({userId, filmId});
}

module.exports = {
    addRecommendation,
    removeRecommendation,
    getRecommendationsForUser,
    getAllRecommendations,
    IsRecommendation
}
