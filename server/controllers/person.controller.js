const Person = require('../models/person.model');

module.exports = {

  createPerson: (req, res) => {
    Person.create(req.body)
    .then((newPerson) => res.json(newPerson))
    .catch((err) => res.status(400).json(err));
  },

  getAllPeople: (req, res) => {
    Person.find({}).sort({ name: 1 })
    .then((allPeople) => res.json(allPeople))
    .catch((err) => res.status(400).json(err));
  },

  getOnePerson: (req, res) => {
    Person.findOne({ _id: req.params.id })
    .then((onePerson) => res.json(onePerson))
    .catch((err) => res.status(400).json(err));
  },

  editPerson: (req, res) => {
    Person.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
      context: 'query'
    })
    .then((updatedPerson) => res.json(updatedPerson))
    .catch((err) => res.status(400).json(err));
  },

  deletePerson: (req, res) => {
    Person.deleteOne({ _id: req.params.id })
    .then((deletedId) => res.json(deletedId))
    .catch((err) => res.status(400).json(err));
  }

};