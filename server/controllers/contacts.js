const Contacts = require("../models").Contacts;

module.exports = {
  create (req, res) {
    Contacts.create({
      name: req.body.name,
      phone_number: req.body.phone_number,
      city: req.body.city,
      state: req.body.state,
      photo_URL: req.body.photo_URL,
      website: req.body.website
    })
      .then(contacts => res.status(201).send(contacts))
      .catch(error => res.status(400).send(error));
  },

  listContacts (req, res) {
   Contacts.all()
     .then(contacts => res.status(200).send(contacts))
     .catch(error => res.status(400).send(error));
 },

 listOneContact (req, res) {
   Contacts.findAll ({
     where: {
       id: req.param.id
     }
   })
 }
};
