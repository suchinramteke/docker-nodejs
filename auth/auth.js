const jwt = require('jsonwebtoken');

verifyToken = (req, res, next) => {
    console.log("token---", req.headers.authorization)
    try {
        if (typeof req.headers.authorization !== "undefined") {
            token = req.headers.authorization
            jwt.verify(token, { algorithm: "HS256" }, (err, user) => {
                // if there has been an error...
                if (err) {
                    // shut them out!
                    res.status(500).json({ error: "Not Authorized" });
                    throw new Error("Not Authorized...");
                }
                // if the JWT is valid, allow them to hit
                // the intended endpoint
                return next();
            })
        }
        else {
            res.status(500).json({ error: "Not Authorized" });
            throw new Error("Not Authorized");
        }
        // jwt.verify()
        next()
    } catch (error) {
        console.log(error)
    }
    // console.log(req)
    // res.json("invalid Token")
}

module.exports = verifyToken;