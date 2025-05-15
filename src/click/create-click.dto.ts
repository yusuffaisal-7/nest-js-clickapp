
// Importing class-validator decorators to enforce validation rules on DTO properties
import { IsString, IsNotEmpty } from 'class-validator';

/**
 * Data Transfer Object (DTO) for validating incoming click tracking requests.
 * Ensures that each required field is provided and is a non-empty string.
 */
export class CreateClickDto {
  /**
   * The ID of the associated campaign.
   * Must be a non-empty string.
   */
  @IsString()
  @IsNotEmpty()
  campaign_id: string;

  /**
   * The name of the ad network source (e.g., Facebook, Google Ads).
   * Must be a non-empty string.
   */
  @IsString()
  @IsNotEmpty()
  ad_network: string;

  /**
   * A unique identifier for the device (e.g., advertising ID, device fingerprint).
   * Must be a non-empty string.
   */
  @IsString()
  @IsNotEmpty()
  device_id: string;

  /**
   * The IP address of the user at the time of the click.
   * Must be a non-empty string.
   */
  @IsString()
  @IsNotEmpty()
  ip: string;

  /**
   * The User-Agent string from the user's browser or device.
   * Must be a non-empty string.
   */
  @IsString()
  @IsNotEmpty()
  user_agent: string;

  /**
   * The URL of the page that referred the user to the click.
   * Must be a non-empty string.
   */
  @IsString()
  @IsNotEmpty()
  referrer: string;
}