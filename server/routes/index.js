const accountsController = require('../controllers').accounts;
const sitesController = require('../controllers').sites;
const screensController = require('../controllers').screens;
const mediasController = require('../controllers').medias;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/accounts', accountsController.create);
  app.get('/api/accounts', accountsController.list);
  app.get('/api/account/:accountId', accountsController.retrieve);
  app.put('/api/account/:accountId', accountsController.update);
  app.delete('/api/account/:accountId', accountsController.destroy);

  app.post('/api/sites', sitesController.create);
  app.get('/api/sites/:accountId', sitesController.list);
  app.get('/api/site/:siteId', sitesController.retrieve);
  app.put('/api/site/:siteId', sitesController.update);
  app.delete('/api/site/:siteId', sitesController.destroy);

  app.post('/api/screens', screensController.create);
  app.get('/api/screens/:siteId', screensController.list);
  app.get('/api/screen/:screenId', screensController.retrieve);
  app.put('/api/screen/:screenId', screensController.update);
  app.delete('/api/screen/:screenId', screensController.destroy);


  app.post('/api/medias', mediasController.create);
  app.get('/api/medias/:siteId', mediasController.list);
  app.get('/api/media/:screenId', mediasController.retrieve);
  app.put('/api/media/:screenId', mediasController.update);
  app.delete('/api/media/:screenId', mediasController.destroy);

  // app.post('/api/todos/:todoId/items', todoItemsController.create);
  // app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);
  // app.delete('/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy);
  app.all('/api/todos/:todoId/items', 
  	       (req, res) => res.status(405).send({message: 'Method Not Allowed',}));
};
