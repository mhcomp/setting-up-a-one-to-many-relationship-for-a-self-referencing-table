import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProjectsRepository } from './projects.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'test',
      entities: [`${__dirname}/**/*.entity.{ts,js}`],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ProjectsRepository]),
  ],
})
export class AppModule {}
