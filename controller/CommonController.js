var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.json("common files user")
})


module.exports = router;
