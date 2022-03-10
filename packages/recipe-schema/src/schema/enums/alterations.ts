/**
 * diff → Show a diff of the two recipes inline.
 * tooltip → A short note to tell the reader that there is a difference between
 *           this recipe and the original.
 * comment → A comment is just a different version of a tooltip so that an author
 *           has the power to show comments and tooltips on a page. Typically
 *           this would be a long-form tooltip
 */
export type alterations = 'diff' | 'tooltip' | 'comment'
