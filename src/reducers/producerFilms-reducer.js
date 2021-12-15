const producerFilmDao = require('../daos/producerFilms-dao');

module.exports = (app) => {
    const addProducerFilm = (req, res) => {
        const userId = req.body.userId;
        const filmId = req.body.filmId;
        const username = req.body.username;
        const filmTitle = req.body.filmTitle;
        producerFilmDao.addProducerFilm(userId, filmId, username, filmTitle)
            .then(f => res.json(f));
    }

    const removeProducerFilm = (req, res) => {
        const userId = req.body.userId;
        const filmId = req.body.filmId;
        producerFilmDao.removeProducerFilm(userId, filmId)
            .then(oldFilm => res.json(oldFilm));
    }

    const getProducerFilmsForUser = (req, res) => {
        const userId = req.params.userId;
        producerFilmDao.getProducerFilmsForUser(userId)
            .then(films => res.json(films));
    }

    const IsProducerFilm = (req, res) => {
        const userId = req.params.userId;
        const filmId = req.params.filmId;
        producerFilmDao.IsProducerFilm(userId, filmId).then(count => {
            if (count <= 0) {
                res.send(false);
            } else {
                res.send(true);
            }
        });
    }

    const getAllProducerFilms = (req, res) => {
        producerFilmDao.getAllProducerFilms()
            .then(bookmarks => res.json(bookmarks));
    }


    app.post('/api/producerFilms/add', addProducerFilm);
    app.delete('/api/producerFilms/remove', removeProducerFilm)
    app.get('/api/producerFilms/user/:userId', getProducerFilmsForUser);
    app.get('/api/producerFilms/currentUser/:filmId/:userId', IsProducerFilm)
    app.get('/api/producerFilms/all', getAllProducerFilms)

}