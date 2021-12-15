const userDao = require('../daos/users-dao')

module.exports = (app) => {
    const login = (req, res) => {
        const username = req.body.username
        const password = req.body.password
        userDao.findUserByCredentials(username, password)
            .then(user => {
                if (user) {
                    req.session['currentUser'] = user
                    res.send(user)
                } else {
                    res.sendStatus(403)
                }
            })
    }

    const register = (req, res) => {
        const newUser = req.body
        userDao.createUser(newUser)
            .then(actualUser => {
                req.session['currentUser'] = actualUser
                res.json(actualUser)
            })
            .catch(() => {
                res.status(400).send('Username is taken.')
            })
    }

    const profile = (req, res) => {
        const currentUser = req.session['currentUser']
        if (currentUser) {
            res.json(currentUser)
        } else {
            res.sendStatus(204)
        }
    }

    const findAllUsers = (req, res) => {
        userDao.findAllUsers()
            .then(users => res.json(users))
    }

    const findAllProducers = (req, res) => {
        userDao.findAllProducers()
            .then(users => res.json(users))
    }

    const findAllClients = (req, res) => {
        userDao.findAllClients()
            .then(users => res.json(users))
    }

    const findAllAdmins = (req, res) => {
        userDao.findAllAdmins()
            .then(users => res.json(users))
    }

    const findUserById = (req, res) => {
        const userId = req.params['uid']
        userDao.findUserById(userId)
            .then(user => res.json(user))
    }

    const updateProfile = (req, res) => {
        const currentUser = req.session['currentUser']
        const update = req.body
        if (currentUser._id === update._id) {
            userDao.updateUser(update)
                .then(response => {
                    res.send(response)
                    req.session['currentUser'] = update
                    req.session.save()
                })
        } else {
            res.sendStatus(400)
        }
    }

    const logout = (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }

    app.post('/api/login', login)
    app.post('/api/register', register)
    app.get('/api/profile', profile)
    app.put('/api/profile/update', updateProfile)
    app.get('/api/users', findAllUsers)
    app.get('/api/users/producers', findAllProducers)
    app.get('/api/users/clients', findAllClients)
    app.get('/api/users/admins', findAllAdmins)
    app.get('/api/users/:uid', findUserById)
    app.post('/api/logout', logout)
}