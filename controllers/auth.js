const {response} = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const {generateJWT} = require('../helpers/jwt');

const createUser = async (req,res = response) => {
    const { email, password} = req.body;
    try {
        let user = await User.findOne({email});

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: "Email already in use"
            });
        }

        user = new User(req.body);
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        const token = await generateJWT(user.id, user.name);

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        });
    } catch (err) {
        res.status(500).json( {
            ok: false,
            msg: "Internal error"
        });
    }
}

const loginUser = async (req, res = response) => {
    const {email, password} = req.body;

    try {

        const user = await User.findOne({email});

        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: "User not found"
            });
        }

        const validPassword = bcrypt.compareSync(password, user.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: "Password is invalid"
            });
        }

        const token = await generateJWT(user.id, user.name);

        res.status(200).json({
            ok: true,
            msg: 'Login',
            uid: user.id,
            name: user.name,
            token
        });

    } catch (e) {
        res.status(500).json( {
            ok: false,
            msg: "Internal error"
        });
    }


}


const renewToken = async(req,res = response) => {

    const uid = req.uid;
    const name = req.name;

    const token = await generateJWT(uid, name);

    res.json({
        ok: true,
        token,
        uid,
        name
    });
}

module.exports = {
    loginUser,
    createUser,
    renewToken
}