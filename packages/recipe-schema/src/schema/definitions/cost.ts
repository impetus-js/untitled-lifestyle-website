
/**
 * The cost of this particular item.
 */
export interface cost {
  /**
   * The numerical value
   */
  value: number

  /**
   * The currency type to know how to render.
   *
   * @todo: Change this to have units
   */
  currency: number
}