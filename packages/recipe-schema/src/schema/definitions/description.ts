import { formats } from '../enums/formats'

/**
 * Long text typically used to explain or to futher elucidate an idea or concept.
 */
export interface description {
  format: formats

  /**
   * Used on all formats but I think this will only be useful for plain text.
   */
  length: {
    /**
     * min character count
     */
    min: number

    /**
     * max character count
     */
    max: number
  }

  /**
   * An external file/API to pull data. Low priority
   */
  external: string
}