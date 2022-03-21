import { description } from './description'
import { cost } from './cost'
import { step } from './step'
import { link } from './link'
import { tool } from './tool'

type instructionType = 'step' | 'section' | 'tip'

/**
 * An array of steps, tips and sections.
 * 
 * Step →
 * Contains all the information needed to write a step. Can contain both tips and sections.
 * 
 * Tip →
 * Only ever a child node of step and this adds some extra insight into the recipe. Used
 * as a callout to the reader from the author.
 * 
 * Example:
 * instructions:
 *   - step
 *     tip
 *   - step
 */
export interface instructions {
  total: {
    /**
     * The total time for this step and all subsqeuent steps (add all times together). 
     * 
     * @format time
     */
    time: string

    /**
     * Required for certain tools. re: Siphons require charges
     */
    consumables: string[]

    /**
     * A list of tools that would be used in here. This isn't required but should be added to the
     * calculated tools list.
     */
    tools: tool[]

    /**
     * Estimated cost based on all below.
     */
    estimatedCost: '#/definitions/cost'
  }

  /**
   * Order in which to show. Heavier (larger) numbers sink bottom, lighter float. If delta is
   * excluted then 0 is used. If none have a delta then they are all 0 and will show up in order
   * that they are added. Main use for delta anywhere in this schema is best for partials.
   */
  delta: number

  steps: step[]
}