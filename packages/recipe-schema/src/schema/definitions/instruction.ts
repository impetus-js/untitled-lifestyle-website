import { description } from './description'
import { cost } from './cost'
import { step } from './step'
import { link } from './link'

type instructionType = 'step' | 'section' | 'tip'

/**
 * An array of steps, tips and sections.
 *  
 * Step →
 * Contains all the information needed to write a step. Can contain both tips and sections.
 * 
 * Tip →
 *   Only ever a child node of step and this adds some extra insight into the recipe. Used
 *   as a callout to the reader from the author.
 *   
 * Section →
 * Sections are only for grouping more steps. It is simply an organizational tool. This 
 * allows for deeper nesting and complex recipies but, again, this should be used
 * exceedingly sparingly. If sections are required think if you really need components
 * instead.
 * 
 * Example:
 * instructions:
 *  - step
 *      tip
 *  - step
 *  - step section
 *    - step
 *      tip
 *    - step
 *      tip
 *        - step section
 *        - step
 *          - step section
 *        - step
 */
export interface instruction {
  /**
   * Optional property to name this instruction (makes more sense if step or tip)
   */
  name?: string

  /**
   * can be of any type ⇉ [$refs → step | stepSection | stepTip]
   */
  type: instructionType

  /**
   * A string key
   */
  id: string

  /**
   * The total time for this step and all subsqeuent steps (add all times together).
   * 
   * @note This is NOT a calculated value but WILL be used to calculate total time.
   */
  totalTime: number

  /**
   * Estimate the cost of this instruction
   */
  estimatedCost: cost

  /**
   * Required for certain tools. re: Siphons require charges
   */
  allConsumables: Array<string | link>

  /**
   * The full instruction text
   */
  text: {
    long: description

    /**
     * Short text limited to an arbitrary 300 characters. Some chefs write paragraphs
     * which is great for a blog but professional chefs do not need that and there are
     * understood ways of working between teams so short versions are useful. 
     */
    short: string
  }

  step: step

  /**
   * These should all be of short type.
   */
  techniques: description[]
}