import { schemaType } from './enums'
import { meta } from './root/meta'
import { about } from './root/about'
import { flavors } from './root/flavors'
import { ingredient } from './root/ingredient'
import { instruction } from './root/instruction'
import { partials } from './root/partials'
import { serving } from './root/serving'
import { storing } from './root/storing'
import { time } from './root/time'
import { yields } from './root/yield'

export interface Recipe {
  /**
   * The version of the recipe schema
   * @see https://semver.org/
   * @see https://regex101.com/r/Ly7O1x/3/
   * @pattern ^(?P<major>0|[1-9]\d*)\.(?P<minor>0|[1-9]\d*)\.(?P<patch>0|[1-9]\d*)(?:-(?P<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?P<buildmetadata>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$
   */
  version: string

  /**
   * 
   */
  type: schemaType

  /**
   * About the recipe.
   */
  about: about

  /**
   * A set of ingrediants. This is a calculated value.
   */
  ingredients?: ingredient[]

  /**
   * A set of instructions and steps
   */
  instructions: instruction[]

  // TODO: Finish me.
  yield: yields[]

  /**
   * Approx times for the entire recipe to take place for a "skilled" person.
   */
  time?: time

  /**
   * Not fully thought out but this could be another type of variant (or it is itself a variant)
   * The intention is to be able to change (heighten, mute, remove) flavors and use complementary
   * flavors in a recipe.
   * 
   * For instance a burger is great if it has a ton of umami but if it's to be sweeter then it would
   * be amazing if the recipe could allow for that. The more I think about it the more sense that it
   * makes to have this as a variant. Building the flavor DB is a whole 'nother issue entirely.
   * 
   * Very low priority.
   */
  flavors?: flavors

  /**
   * Preferred ways to serve. Comes with gallery to show even more info.
   */
  serving?: serving

  /**
   * Explain how it should be stored.
   */
  storing?: storing


  partials?: partials[]

  /**
   * Extra top-level information that isn't required but is useful to have.
   */
  meta?: meta[]
}
