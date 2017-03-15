// Require your controllers here

const ContactsController = require("../controllers/contacts");

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });
 
module.exports = (app) => {
  app.post('/contacts', ContactsController.create);
  app.get('/contacts', ContactsController.listContacts);
  app.get('/contacts/:id', ContactsController.listOneContact);
  app.put('/contacts/:id', ContactsController.updateContact);
  app.delete('/contacts/:id', ContactsController.deleteContact)


};
