/**
 * Not required for recipes but rather the consumer of the recipe. Useful for organization.
 */
export interface taxonomies {
  /**
   * An array of tags. Right now string, future they will be links.
   * 
   * @maxItems 50
   */
  tags: string[]

  /**
   * An array of categories but a limited amount (5 max)
   * 
   * @maxItems 5
   */
  categories: string[]
}