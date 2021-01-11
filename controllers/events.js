const {response} = require('express');
const Event = require('../models/Event');

const getEvents = async(req, res = response) => {

    const events = await Event.find().populate('user', 'name');

    res.json({
        ok: true,
        events
    });
}

const createEvent = async(req, res = response) => {

    const event = new Event(req.body);

    try {
        event.user = req.uid;

        const  savedEvent = await event.save();
        res.json({
            ok: true,
            msg: 'createEvent',
            event: savedEvent
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            ok: false,
            msg: 'Internal error'
        });
    }


}

const updateEvent = async(req, res = response) => {

    const uid = req.uid;
    const eventId = req.params.id;

    try {
        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({
                ok: false,
                msg: 'Resource not found'
            });
        }

        if (event.user.toString()!==uid) {
            return res.status(401).json({
                ok: false,
                msg: 'Forbidden permissions'
            });
        }

        const eventUpdated = {
         ...req.body,
         user: uid
        };

        const eventUpdatedAction = await Event.findByIdAndUpdate(eventId, eventUpdated, {new: true});

        res.json({
            ok: true,
            event: eventUpdatedAction
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            ok: false,
            msg: "Internal error"
        });
    }

}

const deleteEvent = async(req, res = response) => {

    const uid = req.uid;
    const eventId = req.params.id;

    try {
        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({
                ok: false,
                msg: 'Resource not found'
            });
        }

        if (event.user.toString()!==uid) {
            return res.status(401).json({
                ok: false,
                msg: 'Forbidden permissions'
            });
        }

          await Event.findByIdAndRemove(eventId);

        res.json({
            ok: true
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            ok: false,
            msg: "Internal error"
        });
    }
}

module.exports = {
    getEvents,
    updateEvent,
    createEvent,
    deleteEvent
}