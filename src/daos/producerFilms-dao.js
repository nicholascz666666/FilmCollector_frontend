const producerFilmsModel = require('../models/producerFilms/model');

const addProducerFilm = (userId, filmId, username, filmTitle) => {
    return producerFilmsModel.create({userId, filmId, username, filmTitle});
}

const removeProducerFilm = (userId, filmId) => {
    return producerFilmsModel.findOneAndRemove({userId, filmId});
}

const getProducerFilmsForUser = (userId) => {
    return producerFilmsModel.find({userId})
}

const getAllProducerFilms = () => {
    return producerFilmsModel.find();
}

const IsProducerFilm = (userId, filmId) => {
    return producerFilmsModel.countDocuments({userId, filmId});
}

module.exports = {
    addProducerFilm,
    removeProducerFilm,
    getProducerFilmsForUser,
    getAllProducerFilms,
    IsProducerFilm
}
