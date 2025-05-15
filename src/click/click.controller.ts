// Importing necessary decorators and types from NestJS
import { Controller, Post, Body } from '@nestjs/common';

// Importing the ClickService to delegate business logic operations
import { ClickService } from './click.service';

// Importing the DTO class that defines the expected structure of the incoming request body
import { CreateClickDto } from './create-click.dto';

/**
 * Controller to handle HTTP requests related to clicks.
 * The base route for this controller is '/api/click'.
 */
@Controller('api/click')
export class ClickController {
  /**
   * Constructor-based dependency injection.
   * Injects the ClickService to access business logic methods.
   */
  constructor(private readonly clickService: ClickService) {}

  /**
   * Handles POST requests to '/api/click'.
   * Accepts click data in the request body, validates it using CreateClickDto,
   * and delegates the processing to the ClickService.
   *
   * @param createClickDto - The data transfer object containing click data
   * @returns The result from the ClickService's trackClick method
   */
  @Post()
  async trackClick(@Body() createClickDto: CreateClickDto) {
    return this.clickService.trackClick(createClickDto);
  }
}