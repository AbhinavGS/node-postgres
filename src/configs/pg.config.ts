import { registerAs } from '@nestjs/config';

export default registerAs('pgConfig', () => ({
  port: process.env.PG_PORT,
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_NAME,
}));
