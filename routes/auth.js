/*
     User route (authentication)
     host + /api/auth
 */
const {Router} = require('express');
const {check} = require('express-validator');
const {validateFields} = require('../middlewares/validate-fields');
const {validateJWT} = require('../middlewares/validate-jwt');
const router = Router();

const {createUser, loginUser, renewToken} = require('../controllers/auth');
router.post(
    '/new',
    [
        check('name','The name is required.').not().isEmpty(),
        check('email','The email is required.').isEmail(),
        check('password','The password is min 6 chars required.').isLength({min: 6}),
        validateFields
    ],
    createUser
);
router.post(
    '/',
    [
        check('email','The name is required.').isEmail()  ,
        check('password','The password is min 6 chars required.').isLength({min: 6}),
        validateFields
    ],
    loginUser
);
router.get(
    '/renew',
    validateJWT,
    renewToken
);

module.exports = router;
