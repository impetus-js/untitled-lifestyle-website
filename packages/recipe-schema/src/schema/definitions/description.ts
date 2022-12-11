import { formats } from '../types'

/**
 * Long text typically used to explain or to futher elucidate an idea or concept.
 */
export interface description {
  /**
   * A list of available formats.
   */
  format: formats

  /**
   * The actual description. This is any string.
   */
  text: string

  /**
   * Used on all formats but I think this will only be useful for plain text.
   *
   * @note: Should have a sensible default.
   */
  length?: {
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