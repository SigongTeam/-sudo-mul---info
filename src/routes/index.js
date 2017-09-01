const compose = require('koa-compose')

const routeNames = ['review', 'where', 'danawa']
const routes = routeNames
  .map(n => require(`./${n}`))
  .map(r => [r.routes(), r.allowedMethods()])

module.exports = () => compose([].concat(...routes))
