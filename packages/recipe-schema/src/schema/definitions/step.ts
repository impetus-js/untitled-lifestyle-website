import { description } from '../definitions/description'
import { ingredient } from '../definitions/ingredient'
import { image } from '../definitions/image'
import { tool } from '../definitions/tool'

/**
 * A recipe step. Describes everything required to execute a recipe from tools, ingredients, description, images and text.
 */
export interface step {
  /**
   * "Blend eggs". re: Label
   */
  label: string

  /**
   * A time estimate for when something is complete → https://t.ly/X5cw It can be very helpful to
   * your readers if you let them know how much time a recipe will take to make. This can take the
   * form of the total time or it can be broken down into the preparation time, cooking time, and
   * total time. It's also good to call out if a part of the recipe will take a really long period
   * of time, such as marinating over night. 
   * @format time
   */
  timing?: string

  /**
   * An optional tip to give to the reader.
   */
  tip?: description

  /**
   * An optional ingredients array to add here if one forgets and is automatically added to the
   * top-level ingredients list automatically
   * 
   * @todo: add to top-level automatically.
   * @todo: should throw warning to add it to the top-level so it isn't "forgotten". This is only a convience property.
   */
  ingredients?: ingredient[]

  /**
   * A list of required tools
   */
  tools: tool[]

  /**
   * Step images. Will most likely be a single image but can be a gallery for multiple views of
   * the same thing.
   */
  images?: image[]

  /**
   * An optional array of URLs that link out to how to "do thing". Use these for teaching.
   * 
   * @todo: Break this out into it's own type.
   */
  techniques?: {
    /**
     * A side note, a reasoning as to why a technique or instruction is happening. Also useful to
     * explain the chemistry if important.
     */
    why: description

    /**
     * Explain the techniques used with the tools if required. 
     */
    technique: description
  }  
  
  /**
   * The step description
   * 
   * @todo: how to figure out that at least one of these exists in here?
   * @todo: Break this out into it's own type.
   */
  text: {
    /**
     * This will be used as the short label if you're printing out the shortest possible menu (ie: for pros)
     * 
     * @maxLength 240
     */
    stub: string

    /**
     * Short text limited to an arbitrary 300 characters. Some chefs write paragraphs which is great
     * for a blog but professional chefs do not need that and there are understood ways of working
     * between teams so short versions are useful. It's a description so it can be formatted but must
     * be shorter.
     * 
     * @maxLength 500
     */
    short: string | description

    /**
     * This is where it is bloggery. Images could be added in here, of course, but it is best to keep
     * all images in the images property and not in the text. 
     * 
     * The step text. Maybe HTML, Markdown or some flavor of rich-text. Is not "external".
     */
    long: description
  }
}
