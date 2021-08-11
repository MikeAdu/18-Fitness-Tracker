const path = require("path")
const router = require("express").Router();

// get request for notes to return html 
router.get("/exercise", (req, res)=> {
    res.sendFile(path.join(__dirname,("../public/exercise.html")))
})
router.get("/stats", (req, res)=> {
    res.sendFile(path.join(__dirname,("../public/stats.html")))
})
// get request for index.html 
router.get("*", (req, res)=> {
    res.sendFile(path.join(__dirname,("../public/index.html")))
})

module.exports = router