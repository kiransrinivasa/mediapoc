const Account = require('../models').Account;
const Site = require('../models').Site;

module.exports = {
  create(req, res) {
    return Site
      .create({
        name: req.body.name,
        planId : req.body.planId,
      })
      .then((account) => res.status(201).send(account))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return Site
      .find({
        where: {
          accountId: req.params.accountId,
        },
      })
      .then((sites) => res.status(200).send(sites))
      .catch((error) => res.status(400).send(error));
  },

  retrieve(req, res) {
    return Site
      .findById(req.params.siteId, {})
      .then((site) => {
        if (!site) {
          return res.status(404).send({
            message: 'Site Not Found',
          });
        }
        return res.status(200).send(site);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Site
      .findById(req.params.siteId, {})
      .then(site => {
        if (!site) {
          return res.status(404).send({
            message: 'Site Not Found',
          });
        }
        return site
          .update({
            name: req.body.name || account.name,
            planId: req.body.planId || account.planId,
          })
          .then(() => res.status(200).send(site))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return Site
      .findById(req.params.siteId)
      .then(site => {
        if (!site) {
          return res.status(400).send({
            message: 'Site Not Found',
          });
        }
        return site
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
