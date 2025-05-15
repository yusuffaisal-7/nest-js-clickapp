// Importing necessary modules and decorators from NestJS and TypeORM
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Importing the ClickModule which handles all click-related functionality
import { ClickModule } from './click/click.module';

/**
 * The root application module that bootstraps and configures the entire NestJS app.
 * It wires up global modules, database connections, and feature-specific modules.
 */
@Module({
  imports: [
    // Configuring TypeORM with PostgreSQL connection settings
    TypeOrmModule.forRoot({
      type: 'postgres',                // Database type
      host: 'localhost',               // Database server host
      port: 5432,                      // Database server port
      username: 'postgres',            // Database username
      password: '@Faisal',          // Database password (replace with your own)
      database: 'tracker_db',          // Name of the target database
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Path to entity files
      synchronize: true,               // Auto-create database schema (for dev use)
    }),

    // Importing the ClickModule to make its services, controllers, and database features available
    ClickModule,
  ],
})
// Exporting the root AppModule class to launch the application
export class AppModule {}