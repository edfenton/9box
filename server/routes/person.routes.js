const { getAllPeople, createPerson, editPerson } = require('../controllers/person.controller');
const PersonController = require('../controllers/person.controller');

module.exports = (app) => {
  app.get('/api/people', PersonController.getAllPeople);
  app.post('api/people', PersonController.createPerson);
  app.get('/api/pets/:id', PersonController.getOnePerson);
  app.put('/api/people/:id', PersonController/editPerson);
  app.delete('/api/people/:id', PersonController.deletePerson);
};