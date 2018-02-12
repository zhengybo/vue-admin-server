const nav = require('./../../store/lib/nav/index.js');
const banner = require('./../../store/lib/banner/index.js');
// const nav = require('./../../store/lib/nav/index.js');
module.exports =  (index) => {
  return async  function(app,next) {
    app.html = {
      nav : nav(index),
      banner : banner
    }
    // app.query.name = app.query.name && app.query.name.toUpperCase();
    await next();
  };
};
//  结果上 等价
// module.exports = () => {
//   return function* (next) {
//     this.query.name = this.query.name && this.query.name.toUpperCase();
//     yield next;
//   };
// };
