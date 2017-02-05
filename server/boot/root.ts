import * as path from 'path';

module.exports = function(server) {
  server.set('view engine', 'pug');
  server.set('views', path.join(process.cwd(), 'views'));

  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', (req, res) => {
    const ctx = {};
    res.render('index', ctx);
  });
  server.use(router);
};
