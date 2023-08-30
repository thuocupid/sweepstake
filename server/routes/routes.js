let router = require('express').Router();

router.get('/', (req, res)=>{
    res.status(200).json({
        status: 'SUCCESS'
    });
})

module.exports = router;