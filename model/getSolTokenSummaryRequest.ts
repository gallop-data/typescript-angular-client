/**
 * Gallop API
 * Data and insights APIs, webooks, and dashboards enabling businesses to launch tokenized products in seconds.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@higallop.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface GetSolTokenSummaryRequest { 
    /**
     * A token mint address or list of token addresses.
     */
    mint_address: Array<string>;
    /**
     * The numerical id for the token. Provide either id or mint address.
     */
    token_id?: string;
    /**
     * The start date to pull data for calculations
     */
    start_date?: string;
    /**
     * The end date to pull data for calculations
     */
    end_date?: string;
    /**
     * The currency to report results in
     */
    rept_curr?: GetSolTokenSummaryRequest.ReptCurrEnum;
    /**
     * Exclude suspected wash transactions?
     */
    exclude_wash?: boolean;
}
export namespace GetSolTokenSummaryRequest {
    export type ReptCurrEnum = 'sol' | 'usd';
    export const ReptCurrEnum = {
        Sol: 'sol' as ReptCurrEnum,
        Usd: 'usd' as ReptCurrEnum
    };
}


