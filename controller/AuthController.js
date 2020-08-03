var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

const secretKey = '01234567890'

router.get('/', (req, res) => {
    // res.json("auth")
    try {
        const token = jwt.sign({ isAuthenticate: true, userId: 1 }, secretKey);
        // console.log(token)
        res.json({"token":token})
    } catch (error) {
        console.log(error)
    }
})

router.get('/valid',(req,res)=>{
    
})

module.exports = router;
