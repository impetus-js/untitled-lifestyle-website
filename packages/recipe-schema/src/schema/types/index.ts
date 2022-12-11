/**
 * If anything but "recipe" it is a partial (for now)
 */
export type schemaType = 'recipe' | 'component' | 'variation' | 'equiptment' | 'preparation' | 'alteration'

export type diet = 'diabetic' | 'glutenfree' | 'halal' | 'hindu' | 'kosher' | 'lowcalorie' | 'lowfat' | 'lowlactose' | 'lowsalt' | 'vegan' | 'vegetarian'

export type unitType = 'imperial' | 'metric'
export type volumeImp = 't' | 'tsp.' | 'T' | 'tbl.' | 'tbs.' | 'tbsp.' | 'fl oz' | 'c' | 'p' | 'pt' | 'q' | 'qt' | 'g' | 'gal'
export type volumeMetric = 'ml' | 'l'
export type weightImp = 'lb' | 'oz'
export type weightMetric = 'mg' | 'g' | 'kg'
export type lengthImp = 'in'
export type lengthMetric = 'mm' | 'cm' | 'm'
export type temp = 'imperial' | 'metric'

export type allunits = volumeImp | volumeMetric | weightImp | weightMetric | lengthImp | lengthMetric | temp

/**
 * diff → Show a diff of the two recipes inline.
 * tooltip → A short note to tell the reader that there is a difference between
 *           this recipe and the original.
 * comment → A comment is just a different version of a tooltip so that an author
 *           has the power to show comments and tooltips on a page. Typically
 *           this would be a long-form tooltip
 */
export type alterations = 'diff' | 'tooltip' | 'comment'

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

export enum TextOrders {
  LONG_SHORT_STUB,
  LONG_STUB_SHORT,
  SHORT_LONG_STUB,
  SHORT_STUB_LONG,
  STUB_LONG_SHORT,
  STUB_SHORT_LONG,
}
