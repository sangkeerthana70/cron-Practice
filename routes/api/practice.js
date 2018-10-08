const express = require('express');
const router = express.Router();
const controlBarkWorker = require('../../workers/barkWorker');

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

module.exports = router;