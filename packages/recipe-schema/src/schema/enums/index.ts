/**
 * If anything but "recipe" it is a partial (for now)
 */
export type schemaType = 'recipe' | 'component' | 'variation' | 'equiptment' | 'preparation' | 'alteration'

/**
 * diff → Show a diff of the two recipes inline.
 * tooltip → A short note to tell the reader that there is a difference between
 *           this recipe and the original.
 * comment → A comment is just a different version of a tooltip so that an author
 *           has the power to show comments and tooltips on a page. Typically
 *           this would be a long-form tooltip
 */
export type alterations = 'diff' | 'tooltip' | 'comment'

// TODO: Delete me?
export interface types {
  instruction:string
  alterations: string
  document: string
  unit: string
  tool: string
  prep: string
}

/**
 * A tool type
 */
export type toolTypes = 'equiptment' | 'hand tool' | 'consumable'

/**
 * Different types of radix' available based on location.
 * 
 * @see https://docs.oracle.com/cd/E19455-01/806-0169/overview-9/index.html
 */
export type radix = 
 'canadian' | 'danish' | 'finnish' |
 'french' | 'gb-english' | 'german' |
 'italian' | 'norwegian' | 'spanish' |
 'swedish' | 'thai' | 'us-english'

/**
 * The prep lifecycles that exist in prep
 */
export type prep = 'station' | 'end-product' | 'action' | 'in-action'


/**
 * An enum of sizes that the schema supports
 */
export type imageSizes = 'xl' | 'l' | 'medium' | 's' | 'xs'

/**
 * Format tells you which parser should be used. 
 * 
 * plain → No parser
 * markdown → Use a markdown parser
 * html-simple → Only alow certain tags & attributes to be used
 * html-extended → Full HTML. Use with care.
 * rich → I can't remember, sorry
 * csv → comma separated
 */
export type formats = 'plain' | 'markdown' | 'html' | 'html' | 'rich' | 'csv'

/**
 * A configuration property to govern how components are supposed to be rendered.
 * This is a render specific flag.
 * 
 * merge → Merge makes the recipe one single recipe as if they aren't different recipes.
 * append → Append components so that each is created on their own. Typically viewed as sections.
 */
export type componentBehavior = 'merge' | 'append'

export type instructionType = 'step' | 'tip' | 'section'