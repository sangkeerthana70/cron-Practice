const express = require('express');
const router = express.Router();
const barkWorker = require('../../workers/barkWorker1');

/// route: GET /api/practice/
router.get('/', (req, res) => res.json({ status: "success"}));

router.get('/start/:num', (req,res) => {
    if (barkWorker.running()) {
        return res.json({status:'worker already running'});
    }
    barkWorker.start(parseInt(req.params.num));
    return res.json({status:'started worker'});
});

router.get('/stop',(req,res) => {
    if (!barkWorker.running()) {
        return res.json({status:'worker not running'});
    }
    barkWorker.stop();
    return res.json({status:'stopped'});
});

router.post('/sort',)
module.exports = router;