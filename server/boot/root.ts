import * as path from 'path';
import * as loopback from 'loopback';

module.exports = function(server: any) {
  const staticUrl =  server.get('staticUrl');
  server.use(staticUrl, loopback.static('client'));
  server.set('view engine', 'pug');
  server.set('views', path.join(process.cwd(), 'views'));

  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/*', (req: any, res: any) => {
    const ctx = {
      staticUrl: staticUrl
    };
    res.render('index', ctx);
  });
  server.use(router);
};
