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

  getOne: (req, res) => {
    console.log('inside getOne')
    //console.log(req.query.product_id)
    models.getOne(req.params.product_id)
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  getStyles: (req, res) => {
    models.getStyles(req.params.product_id)
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send(err);
      });
  },

  getRelated: (req, res) => {
    models.getRelated(req.params.product_id)
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send(err);
      });
  },

  loader: (req, res) => {
    res.status(200).send('loaderio-15d5975ca9e8c2c778c0deae7dab52dd');
  },
};
