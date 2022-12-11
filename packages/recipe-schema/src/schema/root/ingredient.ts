import { link } from '../definitions/link'
import { modifier } from '../definitions/modifier'
import { measurements } from '../definitions/measurements'

export interface ingredient {
  /**
   * Ingrediant id.
   *
   * @pattern ^[a-zA-Z0-9-_]+$
   */
  id: string

  /**
   * The ingredient name. Plain text.
   */
  name: string

  /**
   * Order in which to show. Heavier (larger) numbers sink bottom, lighter float. If delta is
   * excluted then 0 is used. If none have a delta then they are all 0 and will show up in order
   * that they are added. Main use for delta anywhere in this schema is best for partials.
   *
   * @default 0
   */
  delta?: number

  /**
   * Just a regular number of
   */
  amount: measurements

  /**
   * If this ingredient is required.
   *
   * @default true
   */
  required?: boolean

  /**
   * an alternate ingredient that could be used instead
   */
  alternate?: string

  /**
   * An array of url links for this ingredient
   */
  link?: link[]

  /**
   * Instructions on how to handle the ingredient if required
   */
  handling?: string

  /**
   * How long the ingrediant will last.
   */
  life?: string

  /**
   * A string (or ID) that is a modifier on the ingredient. For instance smashed, unsalted
   * granulated or powered. So when the ingredient is displayed it could, depending on  the
   * renderer, look like "Walnuts, crushed", "Milk, whole", "Cake Crumbs, dry", or "Eggs,
   * room temperature". This is super useful by keeping data normalized. The other option is to put
   * the modifier right into the name but that would be less ideal.
   */
  modifier?: modifier
}
