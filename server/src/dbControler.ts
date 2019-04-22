import * as express from 'express';
var pgp = require('pg-promise')(/*options*/);
var db = pgp('postgres://eikfddqv:Bji1tzurQ3mHGMYzl6Gymmix1_uyUlTr@isilo.db.elephantsql.com:5432/eikfddqv');

const dbConected = (req: express.Response, res: express.Response, next: any) => {
  db.one('SELECT $1 AS value', 123)
    .then(function (data: any) {
      res.locals.db = db;
      return next();
    })
    .catch(function (error: any) {
      if (error) res.locals.db = error;
      return next();
    })
};

module.exports = dbConected;