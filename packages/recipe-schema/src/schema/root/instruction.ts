import { instructionType, TextOrders } from '../types'
import { cost } from '../definitions/cost'
import { tool } from '../definitions/tool'
import { step } from '../definitions/step'
import { consumeables } from '../definitions/consumeables'

export interface TextWrapping {
  /**
     * Optional Step prefix. If added then every step label will begine with this string and a space. ie: "Step: "
     */
   label: string

   /**
    * If used it'll add a number before the prefix. ie: "Step: 1"
    */
   numbered?: boolean
}

/**
 * TODO: This part of the schema is actually a bit busted. Need to think on it a bit more.
 *
 * An array of instructions on how to cook the recipe. This is a combination of the cook
 * instructions in here, the required variants, any inline alterations and all component steps.
 *
 * An array of steps, tips and sections.
 *
 * Step →
 * Contains all the information needed to write a step. Can contain both tips and sections.
 *
 * Tip →
 * Only ever a child node of step and this adds some extra insight into the recipe. Used
 * as a callout to the reader from the author.
 *
 * Section →
 * Sections are only for grouping more steps. It is simply an organizational tool. This
 * allows for deeper nesting and complex recipies but, again, this should be used
 * exceedingly sparingly. If sections are required think if you really need components
 * instead.
 *
 * Example:
 * instructions:
 *   - step
 *    tip
 *   - step
 *   - step section
 *    - step
 *       tip
 *     - step
 *       tip
 *       - step section
 *        - step
 *          - step section
 *        - step
 *
 * Note: Instructions can be nested but it is best if you don't.
 */
export interface instruction {
  /**
   * This is important to know how this will render.
   */
  type: instructionType

  /**
   * The ORDER to pull text from if it exists or not. For instance an author may choose to write
   * just the short text and stub but if being posted on a blog the designer may prefer long then short.
   * 
   * @default TextOrders.LONG_SHORT_STUB
   */
   textOrder: TextOrders.LONG_SHORT_STUB
    | TextOrders.LONG_STUB_SHORT
    | TextOrders.SHORT_LONG_STUB
    | TextOrders.SHORT_STUB_LONG
    | TextOrders.STUB_LONG_SHORT
    | TextOrders.STUB_SHORT_LONG

  /**
   * Stuff to show beforehand
   * 
   * @todo: Pick a better formatting structure.
   */
  pre?: TextWrapping

  /**
   * Stuff to show afterhand
   * 
   * @todo: Pick a better formatting structure.
   */
  post?: TextWrapping

  /**
   * The unique ID for this instruction.
   *
   * @auto: This is auto generated and won't be required. Not sure how to express this yet.
   */
  id: string

  /**
   * The weight used to order steps. Useful for partials.
   * @default 0
   */
  delta?: number

  /**
   * Total time for this instruction. It is calculated based on the steps
   */
  totalTime?: number

  /**
   * Required for certain tools. re: Siphons require charges
   */
  allConsumeables: consumeables[]

  /**
   * The cost the author guesses for this instruction based on it's ingredients.
   *
   * This can be calucated but it should be validated in this fashion:
   *
   * 1. If this exists then this should be the main estimated cost
   * 2. If there are costs establised in any given step it should either be:
   *    - Added together and then compared with this value
   *    - Throw an error if the values are different
   */
  estimatedCost?: cost

  /**
   * An array of URLs that link out to how to "do thing".
   *
   * @todo: Expand on this shape.
   */
  techniques?: string[]

  /**
   * A list of tools that would be used in here. This isn't required but should be added to the
   * calculated tools list.
   */
  tools?: tool[]

  /**
   *
   */
  step: step
}
