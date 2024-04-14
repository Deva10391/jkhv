const express = require('express');
const router = express.Router();
const Req = require('../../modals/requests');


router.get('/', (req, res) => {
    console.log('./routers/api/req.js getting all the { property: value } pairs');
    Req
        .find()
        .sort({ property: 1 })
        .then(value => res.json(value))
        .catch(err => res.status(404).json({ success: false }));
});

router.get('/:id', (req, res) => {
    console.log('./routers/api/req.js getting the pair with _id: ', req.params.id);
    Req
        .findOne({ _id: req.params.id })
        .then(value => res.json(value))
        .catch(err => res.status(404).json({ success: false }));
})

router.delete('/:id', (req, res) => {
    console.log('./routers/api/req.js deleting the pair with _id: ', req.params.id);
    Req
        .deleteOne({ _id: req.params.id })
        .then(value => res.json(value))
        .catch(err => res.status(404).json({ success: false }));
})

router.put('/:id', (req, res) => {
    console.log('./routers/api/req.js updating the pair with _id: ', req.params.id, 'to pair: ', req.body);
    Req
        .updateOne({ _id: req.params.id }, { $set: req.body })
        .then(value => res.json(value))
        .catch(err => res.status(404).json({ success: false }));
})

router.post('/', (req, res) => {
    console.log('./routers/api/req.js posting the { property: value } pair which is: ', req.body);
    const newReq = new Req({
        property200: req.body.property01
    });
    newReq
        .save()
        .then(req => res.json(req))
        .catch(err => res.status(500).json({ success: false }));
});

module.exports = router;