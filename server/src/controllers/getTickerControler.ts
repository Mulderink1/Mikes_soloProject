import * as express from 'express';
import { connectToDB } from "./connectToDB"


export const getTickerControler = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const pool: any = connectToDB();

  const query: object = {
    name: 'GetQuery',
    text:'SELECT * FROM "stock_keys"'
  };

  pool.query(query, (err: any, data: any) => {
    if (err) {
      res.locals.err = err
      return next();
    }
    res.locals.data = data.rows;
    return next();
  });
};



