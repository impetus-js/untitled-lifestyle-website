import { nutrition } from '../definitions/nutrition'
import { link } from '../definitions/link'
import { description } from '../definitions/description'
import { diet } from '../types'

export interface meta {
  /**
   * Simple nutrition information.
   */
  nutrition: nutrition

  /**
   * Diets that this recipe is good for like vegan, omnivore, keto etc.
   */
  suitableForDiets: diet[]

  /**
   * Primary method of cooking. ie: Frying, steaming, confit etc.
   */
  cookingMethod: description
  
  /**
   * Taxonomy -> category
   */
  category: string[]

  /**
   * Taxonomy -> Tags
   */
  tags: string[]  

  /**
   * Multiple because a recipe could be a fusion.
   * 
   * @see https://en.wikipedia.org/wiki/List_of_cuisines
   */
  cuisines: string[]
  
  /**
   * Review links that people have written about this particular recipe.
   */
  reviews?: link[]
}
