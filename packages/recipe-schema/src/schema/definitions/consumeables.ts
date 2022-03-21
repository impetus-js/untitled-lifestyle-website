import { description } from './description'
import { image } from './image'
import { link } from './link'

export interface consumeables {
  name: string
  links: link[]
  desc: description
  image: image
}