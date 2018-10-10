const express = require('express');
const router = express.Router();
const controlBarkWorker = require('../../workers/barkWorker');
const sortNames = require('../../workers/sortWorker')

/// route: GET /api/practice/
router.get('/', (req, res) => res.json({ status: "success"}));

router.get('/start/:num', (req, res) => {
    if (controlBarkWorker(0,'status')) {
        return res.json({ status: 'worker already started'});
    }
    else {
        controlBarkWorker(parseInt(req.params.num),'start');
        return res.json({ status: 'worker started'});
    }
});

router.get('/stop',(req,res) => {
    controlBarkWorker(0,'stop');
    return res.json({ status: 'worker stopped'});
});

router.post('/sort', (req, res) => {
    sortNames(req.body.names.split(' '));
    console.log(req.body.names.split(' '));
    return res.json({ status: 'started sorting names' });
});

module.exports = router;