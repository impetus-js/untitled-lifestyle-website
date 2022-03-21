import { modifier } from './modifier'
import { measurements } from './measurements'
import { allunits } from '../enums'

/**
 * 
 */
 export interface ingredient {
  /**
   * Ingrediant id. @pattern → ingredient + 6 char hash
   */
  id: string

  /**
   * The ingredient name. Plain text
   */
  name: string

  /**
   * Order in which to show. Heavier (larger) numbers sink bottom, lighter float. If delta is
   * excluted then 0 is used. If none have a delta then they are all  0 and will show up in order
   * that they are added.
   * 
   * Main use for delta anywhere in this schema is best for partials.
   */
  delta: number

  /**
   * The chosen units, otherwise it uses the top level units
   */
  units: allunits

  /**
   * Just a regular number of thingies needed. Ya know? Ya dig?
   */
  amount: measurements

  /**
   * If this ingredient is required. There are ingrediants that are required for a dish and some
   * that can be substituted. Take for instance a Key Lime pie. You can do the same thing with 
   * regular ole limes but then it isn't "Key Lime" anymore so therefore "key limes" are a 
   * requirement. Use a variant (or alteration or tip) to denote things like this (you can't get key 
   * limes everywhere).
   */
  required: boolean
  
  /**
   * If ingredient isn't required then this an alternate ingredient that could be used instead
   */
  alternate: unknown
  
  /**
   * A list of links to buy or learn about this ingredient
   */
  link: string[]
  
  /**
   * A string (or ID) that is a modifier on the ingredient. For instance smashed, unsalted
   * granulated or powered. So when the ingredient is displayed it could, depending on the renderer,
   * look like "Walnuts, crushed", "Milk, whole", "Cake Crumbs, dry", or "Eggs, room temperature".
   * This is super useful by keeping data normalized. The other option is to put the modifier right
   * into the name but this is less ideal. 
   */
  modifier: modifier
}