const Contacts = require("../models").Contacts;
const staticPhoto = 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fsunfieldfarm.org%2Fwp-content%2Fuploads%2F2014%2F02%2Fprofile-placeholder.png&imgrefurl=http%3A%2F%2Fsunfieldfarm.org%2Fabout%2Ffaculty%2Fprofile-placeholder%2F&docid=NUs1HfRIwhI3DM&tbnid=wqFTpxdyrrUpwM%3A&vet=1&w=600&h=600&bih=659&biw=1280&q=photo%20placeholder&ved=0ahUKEwj9xrfquNnSAhWBJCYKHSj3C94QMwg3KAAwAA&iact=mrc&uact=8';

module.exports = {
  create (req, res) {
    Contacts.create({
      name: req.body.name,
      phone_number: req.body.phone_number,
      city: req.body.city,
      state: req.body.state,
      photo_URL: req.body.photo_URL || 'staticPhoto',
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
   Contacts.findById(req.params.id)
   .then(contacts => res.status(200).send(contacts))
   .catch(error => res.status(400).send(error));
 },

 updateContact (req, res) {
  return Contacts
    .findById(req.params.id)
    .then(contacts => {
      return contacts
        .update({
          name: req.body.name || contacts.name,
        })
        .then(() => res.status(200).send(contacts))  // Send back the updated contact.
        .catch((error) => res.status(400).send(error));
    })
 },

  deleteContact (req, res) {
    return Contacts
    .findById(req.params.id)
      .then(contacts => {
        return contacts
        .deleteContact()
        .then(() => res.status(201).send({ message:'Contact deleted successfully.'}))
      })
        .catch((error) => res.status(400).send(error));
  }
}
