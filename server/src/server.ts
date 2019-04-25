import * as express from 'express';
import { getTickerControler, addTickerControler, deleteTickerControler, getTickerValueControler } from "./controllers"

const bodyParser = require('body-parser');
const app = express();


const { 
  PORT = 3000
} = process.env;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  return next();
});


app.get('/getTicker', getTickerControler, (req: express.Request, res: express.Response) => {
  res.set({'content-type': 'text/html'});
  if (res.locals.err) res.status(404).send(res.locals.err);
  res.send(res.locals.data);
});

app.get('/getTickerValues', getTickerValueControler, (req: express.Request, res: express.Response) => {
  res.set({'content-type': 'text/html'});
  if (res.locals.err) res.status(404).send(res.locals.err);
  res.send(res.locals.data);
});

app.post('/addTicker', addTickerControler, (req: express.Request, res: express.Response) => {
  res.set({'content-type': 'text/html'});
  if (res.locals.err) res.status(404).send(res.locals.err);
  res.send(res.locals.data);
});

app.delete('/deleteTicker', deleteTickerControler, (req: express.Request, res: express.Response) => {
  res.set({'content-type': 'text/html'});
  if (res.locals.err) res.status(404).send(res.locals.err);
  res.send(res.locals.data);
});

app.get('*', (req: express.Request, res: express.Response) => {
  res.set({'content-type': 'text/html'});
  res.status(404).sendFile('/Users/michaelmulderink/CodeSmith/Mikes_soloProject/client/src/404.html');
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log('server started at http://localhost:'+PORT);
  });
};

export default app;
