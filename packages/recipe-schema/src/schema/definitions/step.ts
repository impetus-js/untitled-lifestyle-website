import { description } from '../definitions/description'
import { tool } from '../definitions/tool'
import { image } from '../definitions/image'

/**
 * A recipe step. Describes everything required to execute a recipe from tools, ingredients,
  # description, images and text.
 */
export interface step {
  type: 'step'

  name: string

  tool: tool

  /**
   * @format time
   */
  time: string

  /**
   * A side note, a reasoning as to why a technique or instruction is happening. Also useful to
   * explain the chemistry if important.
   */
  why: description

  /**
   * Step images. Will most likely be a single image but can be a gallery for multiple views of
   * the same thing.
   */
  images: image[]

  /**
   * A time estimate for when something is complete → https://t.ly/X5cw It can be very helpful to
   * your readers if you let them know how much time a recipe will take to make. This can take the
   * form of the total time or it can be broken down into the preparation time, cooking time, and
   * total time. It's also good to call out if a part of the recipe will take a really long period
   * of time, such as marinating over night.
   */
  timing: string

  /**
   * The step text. Maybe HTML, Markdown or some flavor of rich-text. Is not "external".
   */
  text: {
    long: description

    /**
     * Short text limited to an arbitrary 300 characters. Some chefs write paragraphs which is great
     * for a blog but professional chefs do not need that and there are understood ways of working
     * between teams so short versions are useful.
     */
    short: string
  }
}
