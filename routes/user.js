const router = require('express').Router()

router.get("/test", (req, res) =>
{
    res.send("Test")
})


module.exports = router