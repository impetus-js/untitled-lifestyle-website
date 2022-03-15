import { description } from './description'
import { instructions } from '../root/instruction'

/**
 * Can only ever be a child of a step
 */
export interface stepTip {
  type: 'tip'

  /**
   * A label if to be shown
   */
  text: string
}