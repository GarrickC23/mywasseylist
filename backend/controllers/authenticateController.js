const { response } = require('express')
const { default: mongoose } = require('mongoose')
const User = require('../models/userModel')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function (err, hashedPassword) {
        if (err) { 
            res.json({
                error: err
            })
        }

        let user = new User ({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: hashedPassword
        })

        user.save()
            .then(user => {
                res.json({
                    message: 'User added successfully!'
                })
            })
            .catch(error => {
                res.json({
                    message: 'An error has occurred!'
                })
            })
    })
}

const login = (req, res, next) => { 
    var username = req.body.username
    var password = req.body.password
    
    User.findOne({ $or: [{ email: username }, { username: username }] })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, function (err, result) {
                    if (err) {
                        res.json({
                            error: err
                        })
                    }
                    if (result) {
                        let token = jwt.sign({ name: user.name }, 'secretCode', { expiresIn: '1h' })
                        res.json({
                            message: 'Login successful!',
                            token: token
                        })
                    }
                    else {
                        res.json({
                            message: 'Password does not match!'
                        })
                    }
                })
            }
            else (
                res.json({
                    message: 'No user found!'
                })
            )
        })
}

module.exports = {
    register,
    login
}

