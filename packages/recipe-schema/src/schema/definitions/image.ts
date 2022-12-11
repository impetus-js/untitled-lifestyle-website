import { imageSizes } from "../types";
import { description } from "./description";
import { person } from "./person";

/**
 * An image
 */
export interface image {
  /**
   * The name of the image. Used for captions, alt, aria.
   */
  name: string

  /**
   * A description of the image. Used for captions, alt, aria.
   */
  description: description

  /**
   * A publish date
   *
   * @format date
   * @todo: Is this really nessessary?
   */
  published?: string

  /**
   * A url to the FULL SIZED IMAGE
   */
  url: string

  /**
   * Address, basically text
   *
   * @TODO: Is this really nessessary?
   */
  location?: string

  /**
   * Author name
   *
   * @TODO: Is this really nessessary?
   */
  author?: person

  /**
   * If required, an array of image sizes can be supplied. These tell the consuming app
   * which sizes exist for the app to use. If this is excluded it is expected that the
   * main image is between XL && XXL size and the consuming app will create the
   * derivative images.
   */
  sizes: imageSizes
}