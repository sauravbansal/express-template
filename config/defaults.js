/**
 * Default configurations for all environments.
 */

var pName = require(process.env.PWD + '/package.json').name;

module.exports = {
  logFormat: ':remote-addr [:date[clf]] - ":method :url HTTP/:http-version" :status :res[content-length] :response-time[digits]',
  api: {
    version: 'v1'
  },
  jwtSecret: `${pName}-${process.env.NODE_ENV || 'development'}`,
  dbConfig: {
    port: 3306,
    dialect: 'mysql',
    operatorsAliases: false,
    logging: false
  }
};
