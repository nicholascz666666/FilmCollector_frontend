const bookmarkModel = require('../models/bookmarks/model');

const addBookmark = (userId, filmId, username, filmTitle) => {
    return bookmarkModel.create({userId, filmId, username, filmTitle});
}

const removeBookmark = (userId, filmId) => {
    return bookmarkModel.findOneAndRemove({userId, filmId});
}

const getBookmarksForUser = (userId) => {
    return bookmarkModel.find({userId})
}

const getAllBookmarks = () => {
    return bookmarkModel.find();
}

const IsBookmark = (userId, filmId) => {
    return bookmarkModel.countDocuments({userId, filmId});
}

const getAllUsersForBookmark = (filmId) => {
    return bookmarkModel.find({filmId})
}

module.exports = {
    addBookmark,
    removeBookmark,
    getBookmarksForUser,
    getAllBookmarks,
    IsBookmark,
    getAllUsersForBookmark
}
