const Account = require('../models').Account;
const Site = require('../models').Site;
const Screen = require('../models').Screen;

module.exports = {
  create(req, res) {
    return Screen
      .create({
        name: req.body.name,
        planId : req.body.planId,
      })
      .then((account) => res.status(201).send(account))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return Screen
      .find({
        where: {
          siteId: req.params.siteId,
        },
      })
      .then((screens) => res.status(200).send(screens))
      .catch((error) => res.status(400).send(error));
  },

  retrieve(req, res) {
    return Screen
      .findById(req.params.screenId, {})
      .then((screen) => {
        if (!screen) {
          return res.status(404).send({
            message: 'Screen Info Not Found',
          });
        }
        return res.status(200).send(screen);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Screen
      .findById(req.params.screenId, {})
      .then(screen => {
        if (!screen) {
          return res.status(404).send({
            message: 'Screen Info Not Found',
          });
        }
        return screen
          .update({
            name: req.body.name || account.name,
            planId: req.body.planId || account.planId,
          })
          .then(() => res.status(200).send(screen))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return Screen
      .findById(req.params.screenId)
      .then(screen => {
        if (!screen) {
          return res.status(400).send({
            message: 'Screen Info Not Found',
          });
        }
        return screen
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
