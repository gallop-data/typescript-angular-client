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


export interface GetEthDefaultTokenRiskRequest { 
    /**
     * The contract address of the token collection.
     */
    collection_address: string;
    /**
     * The id(s) for the token(s).
     */
    token_id: Array<string>;
    /**
     * The holding period to evaluate risk for, e.g. \'12M\'
     */
    holding_period: string;
    /**
     * The currency to report results in
     */
    rept_curr?: GetEthDefaultTokenRiskRequest.ReptCurrEnum;
    /**
     * If true, report drawdown volatility (based on negative returns only).
     */
    drawdown?: boolean;
}
export namespace GetEthDefaultTokenRiskRequest {
    export type ReptCurrEnum = 'eth' | 'usd';
    export const ReptCurrEnum = {
        Eth: 'eth' as ReptCurrEnum,
        Usd: 'usd' as ReptCurrEnum
    };
}


