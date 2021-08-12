const router =require ("express").Router()
const db =required("../models")




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
    db.Note.create(body)
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
  
  router.get("/", (req, res) => {
    db.User.find({})
      .populate("workout")
      .then((dbUser) => {
        res.json(dbUser);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  module.exports= router