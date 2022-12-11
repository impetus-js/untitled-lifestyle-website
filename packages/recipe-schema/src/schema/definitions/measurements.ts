/**
 * Use these and the renderer will reformat using the full word and pluralize. Will find one that
 * already exists so I don't have to type all these out manually.
 *
 * Basically a mapping. ex:
 *
 * metric:
 *   - oz: Ounce
 *   - lbs: Pounds
 * imperial:
 *   - same: as-above
 *
 * @TODO: Perhaps this should be an enum.
 */
type GenericKeyVal = {
  [key: string]: string
}

export interface measurements {
  measurement: number

  /**
   * @TODO: Should be 'metric' or 'imperial' or w/e
   */
  type: string

  /**
   *
   */
  unit: string
  // metric?: GenericKeyVal
  // imperial?: GenericKeyVal
}