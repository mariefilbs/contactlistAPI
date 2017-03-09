// Require your controllers here

const ContactsController = require("../controllers/contacts");

module.exports = (app) => {
  app.post('/contacts', ContactsController.create);
  app.get('/contacts', ContactsController.listContacts);
  app.get('/contacts/:id', ContactsController.listOneContact);
  app.put('/contacts/:id', ContactsController.updateContact);
  app.delete('/contacts/:id', ContactsController.deleteContact)



};
