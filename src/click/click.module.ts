// Importing necessary modules and decorators from NestJS and TypeORM
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Importing the controller that will handle incoming HTTP requests related to clicks
import { ClickController } from './click.controller';

// Importing the service that contains the business logic for handling click data
import { ClickService } from './click.service';

// Importing the Click entity which represents the 'clicks' table in the database
import { Click } from './click.entity';

/**
 * The ClickModule bundles related controllers, services, and entity repositories.
 * It configures dependency injection and database access for click-related functionality.
 */
@Module({
  // Importing TypeORM repository for the Click entity, making it available for injection
  imports: [TypeOrmModule.forFeature([Click])],

  // Declaring the controller(s) that belong to this module
  controllers: [ClickController],

  // Declaring the service(s) that belong to this module
  providers: [ClickService],
})
// Exporting the module class so it can be imported and used by other modules (like AppModule)
export class ClickModule {}