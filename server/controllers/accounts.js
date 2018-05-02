const Account = require('../models').Account;

module.exports = {
  create(req, res) {
    return Account
      .create({
        name: req.body.name,
        planId : req.body.planId,
      })
      .then((account) => res.status(201).send(account))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return Account
      .findAll({
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((accounts) => res.status(200).send(accounts))
      .catch((error) => res.status(400).send(error));
  },

  retrieve(req, res) {
    return Account
      .findById(req.params.accountId, {})
      .then((account) => {
        if (!account) {
          return res.status(404).send({
            message: 'Account Not Found',
          });
        }
        return res.status(200).send(account);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Account
      .findById(req.params.accountId, {})
      .then(account => {
        if (!account) {
          return res.status(404).send({
            message: 'Account Not Found',
          });
        }
        return account
          .update({
            name: req.body.name || account.name,
            planId: req.body.planId || account.planId,
          })
          .then(() => res.status(200).send(account))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return Account
      .findById(req.params.accountId)
      .then(account => {
        if (!account) {
          return res.status(400).send({
            message: 'Account Not Found',
          });
        }
        return account
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
