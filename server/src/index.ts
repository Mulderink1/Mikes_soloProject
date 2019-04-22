// import * as fs from 'fs';
// import * as path from 'path';
// import { Request, Response } from 'express';
import * as express from 'express';
import * as cors from "cors";

const mainControler = require('./mainControler');
const dbControler = require('./dbControler');

// Cors is still not working correct, make sure the access controls get updated.
var router = express.Router();
const options:cors.CorsOptions = {
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: 'localhosr:3000',
  preflightContinue: false
};
router.use(cors(options));
router.options("*", cors(options));

const app = express();

const { 
  PORT = 3000
} = process.env;


app.get('/fancy', (req: express.Request, res: express.Response) => {
  res.set({'content-type': 'text/html'});
  res.sendFile('/Users/michaelmulderink/CodeSmith/Mikes_soloProject/client/src/fancy.html');
});

app.get('/print', mainControler, (req: express.Request, res: express.Response) => {
  res.set({'content-type': 'text/html'});
  res.send(res.locals.print);
});

app.get('/db', dbControler, (req: express.Request, res: express.Response) => {
  res.set({'content-type': 'text/html'});
  res.send(res.locals.db);
});

app.get('/styles.css', (req: express.Request, res: express.Response) => {
  res.set({'content-type': 'styles.css'});
  res.sendFile('/Users/michaelmulderink/CodeSmith/Mikes_soloProject/client/src/styles.css');
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
