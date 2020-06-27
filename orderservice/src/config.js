const getConfigFileName = () =>
  ("config.json");

const configFile = require(`./${getConfigFileName()}`);

module.exports.get = () => configFile
