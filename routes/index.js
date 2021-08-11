const router =require ("express").Router()

router.use("/api",require("./api"))
router.use(require("./htmlroutes"))

module.exports= router