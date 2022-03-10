/**
 * A noteable person for this recipe. Typically an author.
 */
export interface person {
  /**
   * The person's full name
   */
  name: string

  /**
   * Output URL
   */
  url?: string

  /**
   * A url to a headshot image
   */
  headshot?: string

  /**
   * Any notable colleagues
   */
  colleagues?: person[]
  
  /**
   * Person's contact info
   */
  contact?: {
    /**
     * Telephone. No format
     * 
     * TODO: Use @pattern here
     */
    telephone?: string

    /**
     * Person's email
     * 
     * TODO: Use @pattern here
     */
    email?: string
  }
  
  /**
   * Last known resturant they were employed/owned.
   */
  resturant: {
    /**
     * Name of the resturant
     */
    name: string
    
    /**
     * The person'a title at the resutrant (Owner, Head Chef, Wait Staff et al)
     */
    title: string
    
    /**
     * The address
     */
    address: string
    
    /**
     * The owner's name if not this person.
     */
    owner: string | 'unknown'
    
    /**
     * The establishment's website.
     */
    url?: string
  }
}