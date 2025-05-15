// Importing necessary decorators and utilities from NestJS and TypeORM
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Importing the data transfer object to define the expected structure of incoming click data
import { CreateClickDto } from './create-click.dto';

// Importing the Click entity, which maps to the 'clicks' table in the database
import { Click } from './click.entity';

// Importing the UUID generator to create unique identifiers for each click
import { v4 as uuidv4 } from 'uuid';

// Importing Node.js crypto module to generate fingerprint hashes
import * as crypto from 'crypto';

/**
 * Service responsible for handling the business logic related to clicks.
 * Provides methods to track and persist click data.
 */
@Injectable()
export class ClickService {
  /**
   * Constructor-based dependency injection.
   * Injects the Click repository to interact with the 'clicks' database table.
   */
  constructor(
    @InjectRepository(Click)
    private clickRepository: Repository<Click>,
  ) {}

  /**
   * Method to track a new click event.
   * - Generates a fingerprint based on IP, User-Agent, and Device ID.
   * - Creates a new Click entity instance.
   * - Saves the click data to the database.
   * - Returns a tracking identifier and a deferral URL for later reference.
   *
   * @param dto - The data transfer object containing click data
   * @returns An object containing the generated fingerprint and deferral URL
   */
  async trackClick(dto: CreateClickDto): Promise<{ tracking_id: string; deferral_url: string }> {
    // Generating a unique fingerprint hash using SHA-256 of IP, User-Agent, and Device ID
    const fingerprint = crypto
      .createHash('sha256')
      .update(`${dto.ip}${dto.user_agent}${dto.device_id}`)
      .digest('hex');

    // Creating a new Click entity instance and populating it with data
    const click = new Click();
    click.click_id = uuidv4();
    click.fingerprint = fingerprint;
    click.campaign_id = dto.campaign_id;
    click.ad_network = dto.ad_network;
    click.device_id = dto.device_id;
    click.ip = dto.ip;
    click.user_agent = dto.user_agent;
    click.referrer = dto.referrer;
    click.timestamp = new Date();

    // Persisting the new click record to the database
    await this.clickRepository.save(click);

    // Returning a response containing the generated tracking ID and a deferral URL
    return {
      tracking_id: fingerprint,
      deferral_url: `https://track.yourdomain.com/deferred/${fingerprint}`,
    };
  }
}