import { description } from '../definitions/description'

/**
 * How to store resulting food. If all components have "storing" value set then they should all be available in some fashion or aother. It is not supported to set the storing procedure for all components manually here (let's say via component id).
 * 
 * The last instruction should be regarding storage, if applicable. For a cookie recipe, for example, "Cookies will keep at room temperature in an airtight container for 3-4 days."
 */
export interface storing {
  desc: description
}
