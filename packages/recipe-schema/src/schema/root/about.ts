import { description } from '../definitions/description'
import { person } from '../definitions/person'
import { cost } from '../definitions/cost'
import { image } from '../definitions/image'
import { link } from '../definitions/link'
import { radix, unitType } from '../enums'

/**
 * Describing the metadata. Useful for websites, descriptions etc.
 */
export interface about {
  /**
   * The name of the recipe. On a website this would be the title, for instance.
   */
  name: string
  
  /**
   * The author of the recipe schema.
   */
  author: person
  
  /**
   * The original author of the recipe.
   */
  originalAuthor: person

  /**
   * Other names that this recipe is ALSO known by.
   */
  alternates: Array<string | link>

  /**
   * A synopsis of the recipe → https://t.ly/Otsc
   */
  headnotes: description
  
  /**
   * A notes and suggestions that typically appear at the end of a recipe.
   */
  notes: description

  /**
   * The created date of the recipe in schema format.
   * 
   * @format date-time
   */
  created: string
  
  /**
   * The original publish date of this recipe.
   * 
   * @format date-time
   */
  published: string

  /**
   * Used to determine which radix symbol to use.
   */
  separator: radix

  /**
   * The specified unit types for this recipe unit types ie metic, imperial, whatever else. Used for conversions.
   * 
   * @TODO: How does this work with separator?
   */
  units: units

  images: {
    /**
     * The main/hero image for this resource. Extra sizes are not acceptable here
     */
    hero: image

    /**
     * A list of -> #/definitions/image
     */
    gallery: image[]

    /**
     * A calculated value of all images from each aspect (include about.images* and partials)
     * 
     * TODO: Is this one required? It isn't a calcluated value.
     */
    all: image[]
  }

  /**
   * A calculated property of all the costs into one.
   */
  totalCost: {
    everything: cost

    /**
     * Calc all within partials separately.
     */
    per?: {
      component: cost
      variants: cost
    }
  }

  /**
   * An array of useful links that are related to this recipe that AREN'T a variation.
   */
  links: link[]
}