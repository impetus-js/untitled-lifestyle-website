import { description } from './description'
import { image } from './image'
import { link } from './link'

/**
 * An item that is "used up".
 */
export interface consumeables {
  name: string
  links: link[]
  desc: description
  image: image
}