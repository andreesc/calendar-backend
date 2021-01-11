/*
     Events routes
     host + /api/events
 */
const {Router} = require('express');
const {validateJWT} = require('../middlewares/validate-jwt');
const router = Router();
const {check} = require('express-validator');
const {validateFields} = require('../middlewares/validate-fields');
const {getEvents, createEvent, updateEvent, deleteEvent} = require('../controllers/events');
const {isDate} = require('../helpers/isDate');

router.use(validateJWT);

router.get('/',  getEvents);
router.post(
    '/',
    [
        check('title', 'The title is required').not().isEmpty(),
        check('start', 'The start date is required').custom(isDate),
        check('end', 'The end date is required').custom(isDate),
        validateFields
    ],
    createEvent
);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;
