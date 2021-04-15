const withImages = require('next-images');
require('dotenv').config();
module.exports = {
  env: {
    baseURL: 'https://api.jiffix.com.ng/api/v1',
  },
};

module.exports = withImages();
