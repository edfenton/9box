const PersonController = require('../controllers/person.controller');
const { authenticate }  = require('../config/jwt.config');

module.exports = (app) => {
  app.get('/api/people', authenticate, PersonController.getAllPeople);
  app.post('/api/people', authenticate, PersonController.createPerson);
  app.get('/api/people/:id', authenticate, PersonController.getOnePerson);
  app.put('/api/people/:id', authenticate, PersonController.editPerson);
  app.delete('/api/people/:id', authenticate, PersonController.deletePerson);
};