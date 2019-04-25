import * as express from 'express';
import { connectToDB } from "./connectToDB"


export const addTickerControler = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const pool:any = connectToDB();

  const stock: string = req.body.stock;
  const price: string = req.body.price;
  const query: object = {
    name: 'InsertQuery',
    text:'INSERT INTO stock_keys(stock_ticker, price_paid) VALUES($1, $2) RETURNING *;',
    values: [stock, price]
  };
   
  pool.query(query, (err: any, data: any) => {
    if (err) {
      res.locals.err = err;
      return next();
    }
    res.locals.data = data;
    return next();
  });
};


