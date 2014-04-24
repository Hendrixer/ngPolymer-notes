var mongoose = require('mongoose'),
    q        = require('q');

var NoteSchema = new mongoose.Schema({
  content: {
    type: String,
    content: String
  },

  title: {
    type: String
  },

  created: {
    type: Date,
    default: Date.now()
  },

  color: {
    type: String,
    default: 'white'
  }
});

NoteSchema.statics.makeNote = function(note){
  var dfrd = q.defer();
  var Note = mongoose.model('notes');
  var values = {
    content: note.content || '',
    title: note.title || '',
    color: note.color || 'white'
  };
  var newNote = new Note(values);
  newNote.save(function(err, savedNote){
    if(err) dfrd.reject(err);
    if(savedNote) dfrd.resolve(savedNote.title);
  });

  return dfrd.promise;
};

module.exports = mongoose.model('notes', NoteSchema);