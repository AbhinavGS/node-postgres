import { Injectable } from '@nestjs/common';
import { PostgresService } from 'src/database/postgres.service';

@Injectable()
export class UsersService {
  constructor(private readonly pgService: PostgresService) {}

  async getAllUsers(): Promise<any> {
    const res = await this.pgService.pool.query('SELECT * FROM u.users');
    return res.rows;
  }
}
