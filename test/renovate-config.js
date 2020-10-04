const config = require('../src/renovate-config');

module.exports = {
  ...config,
  dryRun: true,
  logLevel: 'debug',
};
