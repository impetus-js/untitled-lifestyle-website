import { about } from './root/about'
import { DocumentType } from './enums/document'
import { meta } from './meta'
import { partials } from './root/partials'
import { flavors } from './root/meta'
import { ingredients } from './root/ingredients'
import { instructions } from './root/instructions'
import { serving } from './root/serving'
import { storing } from './root/storing'
import { time } from './root/time'
import { yields } from './root/yield'


/**
 * 
 * TODO: FIgure out what is or isn't important.
 */
export interface Recipe {
  /**
   * The version of the recipe schema
   * @see https://semver.org/
   * @see https://regex101.com/r/Ly7O1x/3/
   * @pattern ^(?P<major>0|[1-9]\d*)\.(?P<minor>0|[1-9]\d*)\.(?P<patch>0|[1-9]\d*)(?:-(?P<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?P<buildmetadata>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$
   */
  version: string

  type: DocumentType

  /**
   * TODO: unit + separators
   */
  about: about
  meta: meta
  
  partials: partials[]
  flavors: flavors[]
  ingredients: ingredients[]
  instructions: instructions[]
  serving: serving[]
  storing: storing[]
  time: time[]
  yield: yields[]
}
