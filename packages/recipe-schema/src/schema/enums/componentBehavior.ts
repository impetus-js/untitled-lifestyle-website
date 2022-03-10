/**
 * A configuration property to govern how components are supposed to be rendered.
 * This is a render specific flag.
 * 
 * merge → Merge makes the recipe one single recipe as if they aren't different recipes.
 * append → Append components so that each is created on their own. Typically viewed as sections.
 */
 export type formats = 'merge' | 'append'