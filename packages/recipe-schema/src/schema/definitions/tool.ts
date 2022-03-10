import { toolTypes } from '../enums/toolTypes'
import { description } from './description'
import { image } from './image'

/**
 * All the properties required for a tool that is used in a recipe.
 */
export interface tool {
  /**
   * The name of the tool as it's commonly known in your area
   */
  name: string

  /**
   * The category of this tool (under this schema)
   */
  type: toolTypes

  /**
   * Other names that this tool is known by.
   * 
   * A link/text to show what this is the same as (string | SameAs)
   */
  alternateNames: string[]

  /**
   * The amount required for this activity
   */
  quantity: number

  /**
   * A description of this tool
   */
  description: description

  /**
   * An image
   */
  image?: image

  /**
   * Indicates a potential (ideal) action.
   */
  potentialAction: string

  /**
   * A store URL
   */
  url: string

  /**
   * A list of tutorial URLs to show the reader how to use this tool.
   */
  tutorials: string[]

  /**
   * Consumables for the tool if it requires it.
   */
  consumeables: string[]
}