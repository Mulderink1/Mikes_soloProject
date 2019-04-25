const fetch = require('node-fetch');
import { connectToDB } from "./connectToDB";

export const stockAPI = (stock_key) => {
  const pool: any = connectToDB();

  for(let i = 0; i < stock_key.length; i += 1) {
    const acc_Stock_key = stock_key[i].stock_ticker;
    const stock_str = `https://www.worldtradingdata.com/api/v1/stock?symbol=${acc_Stock_key}&api_token=gOMjs9b6yFbcgRWSBKeYrgUzkZBDgfRaOseHNchrRByKyGH03znqheiciLW3`;
    
    fetch(stock_str)
      .then((response) => response.json()
      )
      .then((data) => {
        const query: object = {
          name: 'addValueQuery',
          text:`UPDATE stock_keys SET stock_value = ${data.data[0].price} WHERE stock_ticker = '${acc_Stock_key}'`
        };
        pool.query(query, (err: any, data: any) => {
          if (err) {
            return err;
          }
          return;
        });
      })
    }
};
