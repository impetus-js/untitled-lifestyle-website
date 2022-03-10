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