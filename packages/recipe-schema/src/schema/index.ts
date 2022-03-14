// TODO: Some of these need to be finished up

// import { ingredient } from './definitions/ingredient'
// import { measurement } from './definitions/measurement'
// import { modifier } from './definitions/modifier'
// import { stepTip } from './definitions/stepTip'
import { cost } from './definitions/cost'
import { description } from './definitions/description'
import { image } from './definitions/image'
import { instruction } from './definitions/instruction'
import { link } from './definitions/link'
import { person } from './definitions/person'
import { step } from './definitions/step'
import { stepSection } from './definitions/stepSection'
import { taxonomies } from './definitions/taxonomies'
import { tool } from './definitions/tool'

// import { componentBehavior } from './enums/componentBehavior'
import { DocumentType } from './enums/document'
import { alterations } from './enums/alterations'
import { formats } from './enums/formats'
import { imageSizes } from './enums/imageSizes'
import { prep } from './enums/prep'
import { radix } from './enums/radix'
import { toolTypes } from './enums/toolTypes'
import { types } from './enums/types'

// import { category } from './meta/category'
// import { cookingMethod } from './meta/cookingMethod'
// import { cuisines } from './meta/cuisines'
// import { nutrition } from './meta/nutrition'
// import { reviews } from './meta/reviews'
// import { suitableForDiet } from './meta/suitableForDiet'
// import { meta } from './meta'

// import { alterations } from './partials/alterations'
// import { components } from './partials/components'
// import { equiptment } from './partials/equiptment'
// import { preparations } from './partials/preparations'
// import { variations } from './partials/variations'

import { meta } from './root/meta'
import { about } from './root/about'
import { flavors } from './root/flavors'
import { ingredients } from './root/ingredients'
import { instructions } from './root/instructions'
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

  type: DocumentType
  about: about
  
  ingredients: ingredients[]
  instructions: instructions[]
  yield: yields[]
  time: time[]
  flavors: flavors[]
  serving: serving[]
  storing: storing[]
  partials: partials[]
  meta: meta[]
}
