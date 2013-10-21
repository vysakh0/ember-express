var path = require('path');
module.exports = {
  server: {
    options: {
      port: 9000,
      hostname: '*',
      server: path.resolve('./server'),
      bases: ['tmp/public', 'app'],
      livereload: true
    }
  }
};
