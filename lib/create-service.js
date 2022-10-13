const fs = require('fs');

const consoles = require('./consoles');

module.exports = function createDotmindApp(opts) {
  const serviceName = opts.serviceName;

  if (!serviceName) {
    console.log(consoles.missingServiceName());
    process.exit(1);
  }

  if (fs.existsSync(serviceName) && serviceName !== '.') {
    console.log(consoles.alreadyExists(serviceName));
    process.exit(1);
  }

  opts.servicePath = process.cwd() + '/src/services/' + serviceName;
}
