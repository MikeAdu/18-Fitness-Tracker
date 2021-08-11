const router =require ("express").Router()

router.use(require("./api"))
router.use(require("./htmlroutes"))

module.exports= router