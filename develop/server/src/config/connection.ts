import oracledb from 'oracledb';
import dotenv from 'dotenv';

dotenv.config();

oracledb.initOracleClient({ libDir: process.env.ORACLE_CLIENT_LIB });

export const getPool = async () => {
  return await oracledb.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_CONNECT_STRING,
  });
};