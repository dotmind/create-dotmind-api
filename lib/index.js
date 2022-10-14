const fs = require('fs');

const downloadExample = require('./utils/download-example');
const consoles = require('./consoles');

module.exports = function createDotmindApi(opts) {
  const projectName = opts.projectName;

  if (!projectName) {
    console.log(consoles.missingProjectName());
    process.exit(1);
  }

  if (fs.existsSync(projectName) && projectName !== '.') {
    console.log(consoles.alreadyExists(projectName));
    process.exit(1);
  }

  opts.projectPath = process.cwd() + '/' + projectName;

  if (opts.example) {
    downloadExample({
      projectName: projectName,
      example: opts.example,
    });
  } else {
    console.log(consoles.missingProjectExample());
    process.exit(1);
  }
}
