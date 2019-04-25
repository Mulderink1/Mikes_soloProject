import * as express from 'express';
import { connectToDB } from "./connectToDB"


export const deleteTickerControler = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const pool:any = connectToDB();

  const stock: any = req.body.stock;
  const query: object = {
    name: 'DeleteQuery',
    text: "DELETE FROM stock_keys WHERE stock_ticker=$1 RETURNING *;",
    values: [stock]
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


