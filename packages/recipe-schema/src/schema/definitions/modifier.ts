/**
 * A modifier for an ingrediant (for now at least)
 */
export interface modifier {
  /**
   * Ingredient id. Useful to build URLs, to keep using the same ingredients
   */
  id: string

  /**
   * Plain text modifier text 
   */
  text: string
}