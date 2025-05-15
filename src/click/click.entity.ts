// Importing necessary decorators from TypeORM to define the entity and its columns
import { Entity, Column, PrimaryColumn } from 'typeorm';

/**
 * The Click entity represents the 'clicks' table in the database.
 * Each property in this class corresponds to a column in the table.
 */
@Entity('clicks')
export class Click {
  /**
   * The primary key column for the 'clicks' table.
   * Uniquely identifies each click record.
   */
  @PrimaryColumn()
  click_id: string;

  /**
   * Column to store a unique fingerprint string representing the user's browser/device.
   */
  @Column()
  fingerprint: string;

  /**
   * Column to store the identifier of the associated campaign.
   */
  @Column()
  campaign_id: string;

  /**
   * Column to store the ad network's name (e.g., Google Ads, Facebook).
   */
  @Column()
  ad_network: string;

  /**
   * Column to store the unique device identifier (e.g., advertising ID or fingerprint hash).
   */
  @Column()
  device_id: string;

  /**
   * Column to store the user's IP address when the click was recorded.
   */
  @Column()
  ip: string;

  /**
   * Column to store the User-Agent string from the user's browser or device.
   */
  @Column()
  user_agent: string;

  /**
   * Column to store the URL of the page that referred the user to the ad/click.
   */
  @Column()
  referrer: string;

  /**
   * Column to store the exact timestamp of when the click occurred.
   */
  @Column()
  timestamp: Date;
}