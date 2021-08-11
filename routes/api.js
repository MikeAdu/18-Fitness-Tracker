const router =require ("express").Router()





app.get("/notes", (req, res) => {
    db.Note.find({})
      .then((dbNote) => {
        res.json(dbNote);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  app.get("/user", (req, res) => {
    db.User.find({})
      .then((dbUser) => {
        res.json(dbUser);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  app.post("/submit", ({ body }, res) => {
    db.Note.create(body)
      .then(({ _id }) =>
        db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true })
      )
      .then((dbUser) => {
        res.json(dbUser);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  app.get("/populateduser", (req, res) => {
    db.User.find({})
      .populate("notes")
      .then((dbUser) => {
        res.json(dbUser);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  module.exports= router