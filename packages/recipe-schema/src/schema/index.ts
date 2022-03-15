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
  type: schemaType
  about: about
  ingredients: ingredient[]
  instructions: instruction[]
  yield: yields[]

  // Not required.
  time?: time
  flavors?: flavors
  serving?: serving  
  storing?: storing
  partials?: partials[]
  meta?: meta[]
}
