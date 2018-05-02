const Media = require('../models').Media;

module.exports = {
  create(req, res) {
    return Media
      .create({
        name: req.body.name,
        planId : req.body.planId,
      })
      .then((media) => res.status(201).send(media))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return Media
      .findAll({
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((medias) => res.status(200).send(medias))
      .catch((error) => res.status(400).send(error));
  },

  retrieve(req, res) {
    return Media
      .findById(req.params.mediaId, {})
      .then((media) => {
        if (!media) {
          return res.status(404).send({
            message: 'Media Not Found',
          });
        }
        return res.status(200).send(media);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Media
      .findById(req.params.mediaId, {})
      .then(media => {
        if (!media) {
          return res.status(404).send({
            message: 'Media Not Found',
          });
        }
        return media
          .update({
            name: req.body.name || media.name,
            planId: req.body.planId || media.planId,
          })
          .then(() => res.status(200).send(media))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return Media
      .findById(req.params.mediaId)
      .then(media => {
        if (!media) {
          return res.status(400).send({
            message: 'Media Not Found',
          });
        }
        return media
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
