const router =require ("express").Router()
const db =require("../models")




router.get("/", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  

  
  router.post("/", ({ body }, res) => {
    db.Workout.create(body)
      .then(({ _id }) =>
        db.Workout.findOneAndUpdate({}, { $push: { Workout: _id } }, { new: true })
      )
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  router.get("/range", (req, res) => {
    db.Workout.find({})
      .populate("workout")
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.put("/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, {new: true})
      .then(dbWorkout => {res.json(dbWorkout)} ) .catch((err) => {
        res.json(err);
      });
  })

  module.exports= router