const multer = require('multer');
const path = require('path');

module.exports = {
  /*eslint new-cap: ["error", { "newIsCap": false }] */
  storage: new multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename(req, file, callback) {
      callback(null, file.originalname);
    },
  }),
};
