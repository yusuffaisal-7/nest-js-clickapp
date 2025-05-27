import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClickModule } from './click/click.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '@Faisal',
      database: 'tracker_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // Set to false for production
    }),
    ClickModule,
  ],
})
export class AppModule {}