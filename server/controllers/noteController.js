var Note = require('../models/note.js');

module.exports = {
  get: function(req, res){
    var note = Note.find({}).exec();
    note.then(function (notes){
      res.send(notes);
    });
  },
  post: function(req, res, next){
    var note = req.body.note;
    Note.makeNote(note)
      .then(function(title){
        res.send(title);
      })
      .fail(function(err){
        next(err);
      });
  },
  destroy: function(req, res){
    req.note.remove(function(err, note){
      if (err) next(err);
      res.send(note.title);
    });
  },

  param: function(req, res, next, id){
    Note.findById(id, function(err, note){
      if(err) next(err);
      if(note) {
        req.note = note;
        next();
      } else {
        next(new Error('No note'));
      }
    });
  }
};