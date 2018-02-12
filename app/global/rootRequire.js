const path = require('path');
module.exports = () => {
  global.rootRequire = (name) => {
    return require(path.resolve(__dirname,'../'+name));
  }
}
