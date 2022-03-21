import { instructionType } from '../enums'
import { cost } from '../definitions/cost'
import { tool } from '../definitions/tool'
import { step } from '../definitions/step'
import { consumeables } from '../definitions/consumeables'

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
   * Not required. A label for this step
   */
  name?: string
  
  /**
   * The unique ID for this instruction.
   */
  id: string
  
  /**
   * Total time for this instruction. It is calculated based on the steps 
   */
  totalTime?: number

  /**
   * Required for certain tools. re: Siphons require charges
   */
  allConsumeables: consumeables[]
  
  /**
   * The amount the author guesses for this instruction based on it's ingredients.
   * 
   * TODO: I fell this is in the wrong place.
   */
  estimatedCost: cost
  
  /**
   * 
   */
  step: step

  /**
   * An array of URLs that link out to how to "do thing".
   */
  techniques: string[]

  /**
   * A list of tools that would be used in here. This isn't required but should be added to the
   * calculated tools list.
   */
  tools: tool[]
}
