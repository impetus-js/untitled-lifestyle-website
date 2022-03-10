import { description } from '../definitions/description'

export interface about {
  /**
   * The name of the recipe. On a website this would be the title, for instance.
   */
  name: string

  /**
   * Other names that this recipe is ALSO known by.
   */
  alternates: string[]

  /**
   * A synopsis of the recipe → https://t.ly/Otsc
   */
  headnotes: description

  images: {
    /**
     * The main/hero image for this resource. Extra sizes are not acceptable here
     */
    hero: string

    /**
     * A list of -> #/definitions/image
     */
    gallery: unknown[]

    /**
     * A calculated value of all images from each aspect (include about.images* and partials)
     */
    all: unknown[]
  }
}