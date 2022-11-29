import { description } from '../definitions/description'
import { person } from '../definitions/person'
import { cost } from '../definitions/cost'
import { image } from '../definitions/image'
import { link } from '../definitions/link'
import { radix, unitType } from '../types'

/**
 * Describing the metadata. Useful for websites, descriptions etc.
 */
export interface about {
  /**
   * The name of the recipe. On a website this would be the title, for instance.
   */
  name: string
  
  /**
   * The author of the recipe schema.
   */
  author: person
  
  /**
   * The original author of the recipe.
   */
  originalAuthor: person

  /**
   * Other names that this recipe is ALSO known by.
   */
  alternates: Array<string | link>

  /**
   * A synopsis of the recipe → https://t.ly/Otsc
   */
  headnotes: description
  
  /**
   * A notes and suggestions that typically appear at the end of a recipe.
   */
  notes: description

  /**
   * The created date of the recipe in schema format.
   * 
   * @format date-time
   */
  created: string
  
  /**
   * The original publish date of this recipe.
   * 
   * @format date-time
   */
  published: string

  /**
   * Used to determine which radix symbol to use.
   */
  separator: radix

  /**
   * The specified unit types for this recipe unit types ie metic, imperial, whatever else. Used for conversions.
   * 
   * @TODO: How does this work with separator? A worry for the implementation nerds 🤣
   */
  units: {
    measurements: unitType

    /**
     * Currency code.
     * 
     * Used to determine the currency formatting and addition.
     * 
     * @see https://en.wikipedia.org/wiki/ISO_4217#National_currencies
     */
    currency: 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GGP' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'IMP' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SPL' | 'SRD' | 'STN' | 'SVC' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TVD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VEF' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XDR' | 'XOF' | 'XPF' | 'YER' | 'ZAR' | 'ZMW' | 'ZWD'
  }

  images: {
    /**
     * The main/hero image for this resource. Extra sizes are not acceptable here
     */
    hero: image

    /**
     * A list of -> #/definitions/image
     */
    gallery: image[]
  }

  /**
   * A calculated property of all the costs into one.
   */
  totalCost: {
    /**
     * As the name suggests this is a caluclated value of all the costs summed up from anywhere a cost could be found.
     * 
     * It would be smart to calucate all the component costs first them sum those up here.
     */
    everything: cost

    /**
     * Calc all within partials separately.
     */
    per?: {
      /**
       * Should be noted that component will show the cost breakdown on a per-component level. If there are costs associated with ingredients, tools etc then all the summed costs from each of those components would show up under the component in here
       */
      component: cost
    }
  }

  /**
   * An array of useful links that are related to this recipe that AREN'T a variation.
   */
  links: link[]
}