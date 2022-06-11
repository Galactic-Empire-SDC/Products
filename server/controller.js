// require models
const models = require('./models');

module.exports = {

  get: (req, res) => {
    models.getAll()
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
};
