const bookmarkDao = require('../daos/bookmark-dao');

module.exports = (app) => {
    const addBookmark = (req, res) => {
        const userId = req.body.userId;
        const filmId = req.body.filmId;
        const username = req.body.username;
        const filmTitle = req.body.filmTitle;
        bookmarkDao.addBookmark(userId, filmId, username, filmTitle)
            .then(bookmark => res.json(bookmark));
    }

    const removeBookmark = (req, res) => {
        const userId = req.body.userId;
        const filmId = req.body.filmId;
        bookmarkDao.removeBookmark(userId, filmId)
            .then(oldBookmark => res.json(oldBookmark));
    }

    const getBookmarksForUser = (req, res) => {
        const userId = req.params.userId;
        bookmarkDao.getBookmarksForUser(userId)
            .then(bookmarks => res.json(bookmarks));
    }

    const IsBookmark = (req, res) => {
        const userId = req.params.userId;
        const filmId = req.params.filmId;
        bookmarkDao.IsBookmark(userId, filmId).then(count => {
            if (count <= 0) {
                res.send(false);
            } else {
                res.send(true);
            }
        });
    }

    const getAllBookmarks = (req, res) => {
        bookmarkDao.getAllBookmarks()
            .then(bookmarks => res.json(bookmarks));
    }

    const getAllUsersForBookmark = (req, res) => {
        const filmId = req.params.filmId;
        bookmarkDao.getAllUsersForBookmark(filmId)
            .then(users => res.json(users));
    }

    app.post('/api/bookmarks/add', addBookmark);
    app.delete('/api/bookmarks/remove', removeBookmark)
    app.get('/api/bookmarks/user/:userId', getBookmarksForUser);
    app.get('/api/bookmarks/currentUser/:filmId/:userId', IsBookmark)
    app.get('/api/bookmarks/all', getAllBookmarks)
    app.get('/api/bookmarks/all/:filmId', getAllUsersForBookmark)
}