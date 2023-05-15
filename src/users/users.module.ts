import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PostgresService } from 'src/database/postgres.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PostgresService],
})
export class UsersModule {}
