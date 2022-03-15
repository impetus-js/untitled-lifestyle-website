/**
 * If this time property isn't top-level isn't set then all the properties are calculated based on
 * where the parser will find time properties on the recipe & partials schemas
 */
export interface time {
  /**
   * The estimated cook time for this ingredient or step. This should include the prep, active and
   * inactive times. This property is NOT calulated. Do the addition, it won't kill you. Promise().
   * 
   * @format time
   */
  cook: string

  /**
   * The estimated preparation time for this ingredient or step. This is how long it SHOULD not
   * how long it takes YOU to prep.
   * 
   * @format time
   */
  prep?: string

  /**
   * The estimated active time for this ingredient or step. The actual cooking.
   * 
   * @format time
   */
  active?: string

  /**
   * The estimated inactive time for this ingredient or step. 
   * 
   * ex: Marinades, brines & rubs etc.
   * 
   * @format time
   */
  inactive?: string

  /**
   * A calculated total cook + active time. If this is filled out but the author it is skipped in
   * the total calculation. This is a property that should be left out of authoring and is typically
   * filled in by an automated process of some sort.
   * 
   * TODO: Is this required at this level of the schema?
   * 
   * @format time
   */
  total?: string
}
