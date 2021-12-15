const recommendationDao = require('../daos/recommendation-dao');

module.exports = (app) => {
    const addRecommendation = (req, res) => {
        const userId = req.body.userId;
        const filmId = req.body.filmId;
        const username = req.body.username;
        const filmTitle = req.body.filmTitle;
        recommendationDao.addRecommendation(userId, filmId, username, filmTitle)
            .then(recommendation => res.json(recommendation));
    }

    const removeRecommendation = (req, res) => {
        const userId = req.body.userId;
        const filmId = req.body.filmId;
        recommendationDao.removeRecommendation(userId, filmId)
            .then(oldRecommendation => res.json(oldRecommendation));
    }

    const getRecommendationsForUser = (req, res) => {
        const userId = req.params.userId;
        recommendationDao.getRecommendationsForUser(userId)
            .then(recommendations => res.json(recommendations));
    }

    const IsRecommendation = (req, res) => {
        const userId = req.params.userId;
        const filmId = req.params.filmId;
        recommendationDao.IsRecommendation(userId, filmId).then(count => {
            if (count <= 0) {
                res.send(false);
            } else {
                res.send(true);
            }
        });
    }

    const getAllRecommendations = (req, res) => {
        recommendationDao.getAllRecommendations()
            .then(posts => res.json(posts));
    }

    app.post('/api/recommendations/add', addRecommendation);
    app.delete('/api/recommendations/remove', removeRecommendation);
    app.get('/api/recommendations/user/:userId', getRecommendationsForUser);
    app.get('/api/recommendations/currentUser/:filmId/:userId', IsRecommendation)
    app.get('/api/recommendations/all', getAllRecommendations)
}