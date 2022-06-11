// require axios
// require pool/ db
// define queries

const db = require('./postgreSQL');

module.exports = {

  getAll() {
    return db.connect().then(
      (connection) => {
        const query = 'SELECT * FROM product limit 10';
        return connection.query(query)
          .then((res) => {
            connection.release();
            return res.rows;
          })
          .catch((err) => {
            connection.release();
            throw err;
          });
      },
    );
  },

  getRelated(productId) {
    return db.connect().then(
      (connection) => {
        const query = `SELECT array_agg(related.related_product_id) FROM related WHERE related.current_product_id = ${productId}`;
        return connection.query(query)
          .then((res) => {
            connection.release();
            return res.rows[0].array_agg;
          })
          .catch((err) => {
            connection.release();
            throw err;
          });
      },
    );
  },

  // getOne(productId) {
  //   return db.connect().then(
  //     (connection) => {
  //       const query = `SELECT array_agg(json_build_object('feature', text, 'value', text)) FROM product WHERE id = ${productId} `;
  //       return connection.query(query)
  //         .then((res) => {
  //           connection.release();
  //           return res.rows[0].array_agg;
  //         })
  //         .catch((err) => {
  //           connection.release();
  //           throw err;
  //         });
  //     },
  //   );
  // },
};
