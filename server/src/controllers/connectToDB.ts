const { Pool } = require('pg');
const connectionString: string = 'postgres://eikfddqv:Bji1tzurQ3mHGMYzl6Gymmix1_uyUlTr@isilo.db.elephantsql.com:5432/eikfddqv';
 

export const connectToDB = () => {
  return new Pool({
    connectionString: connectionString,
    max: 2
  });
};

