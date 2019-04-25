import * as express from 'express';
import { connectToDB } from "./connectToDB";
import { stockAPI } from "./stockAPI";

export const getTickerValueControler = (req: express.Request, res: express.Response, next: express.NextFunction) => {
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
    stockAPI(data.rows)
    return next();
  });
};