import { description } from './description'
import { instruction } from '../root/instruction'

/**
 * Can only ever be a child of a step
 */
export interface stepSection {
  type: 'section'

  /**
   * A label if to be shown
   */
  label: string  

  /**
   * Child set of instructions
   */
  steps: instruction[]
}