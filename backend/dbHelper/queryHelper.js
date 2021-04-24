//with help from https://time2hack.com/creating-rest-api-in-node-js-with-express-and-mysql/

module.exports = async (connection, q, params) =>
  new Promise(
    //check whether we receive an error from our request
    (resolve, reject) => {
      const handler = (error, result) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      };
      //sends query to our database
      connection.query(q, params, handler);
    }
  );
