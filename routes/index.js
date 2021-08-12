const router =require ("express").Router()

router.use("/api/workouts",require("./api"))
router.use(require("./htmlroutes"))

module.exports= router