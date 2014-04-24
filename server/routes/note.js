var noteController = require('../controllers/noteController.js');

app.param('note', noteController.param);

app.route('/note')
  .get(noteController.get)
  .post(noteController.post);

app.route('/note/:note')
  .delete(noteController.destroy);
