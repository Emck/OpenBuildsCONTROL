const router = require('express').Router({ mergeParams: true }); // import root mergeParams

// Get /gcode
router.get('/', function(req, res) {
    res.status(200).json({
        error: 'access denied'
    });
});

// Post /gcode
router.post('/', (req, res) => {
    res.send('M30');
});

// export Router
module.exports = router;
