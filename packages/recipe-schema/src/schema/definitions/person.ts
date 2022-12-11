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
     * @pattern ^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$
     * @see https://ihateregex.io/expr/phone/
     */
    telephone?: string

    /**
     * Person's email
     *
     * @pattern [^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+
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
     * The address.
     *
     * TODO: One day this will be expanded upon.
     */
    address: string

    /**
     * The owner's name if not this person.
     */
    owner?: string | 'unknown'

    /**
     * The establishment's website.
     */
    url?: string
  }
}