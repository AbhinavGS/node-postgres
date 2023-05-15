import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Pool } from 'pg';
import pgConfig from 'src/configs/pg.config';

@Injectable()
export class PostgresService {
  public pool: Pool;

  constructor(
    @Inject(pgConfig.KEY)
    private readonly dbConfig: ConfigType<typeof pgConfig>,
  ) {
    this.connect();
  }

  connect(): void {
    this.pool = new Pool(this.dbConfig);
  }
}
