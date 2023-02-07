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
import { GetEthCollectionForecastsRequestArchParams } from './getEthCollectionForecastsRequestArchParams';


export interface GetEthCollectionForecastsRequest { 
    /**
     * The contract address of the token collection.
     */
    collection_address: string;
    /**
     * The collection percentile(s)
     */
    percentiles?: Array<number>;
    /**
     * Type of statistical forecasting model to be calculated as a 3-char string, e.g. `arc` for ARCH
     */
    voltype?: GetEthCollectionForecastsRequest.VoltypeEnum;
    /**
     * The forecast horizon (i.e. the number of periods to forecast out)
     */
    horizon?: number;
    /**
     * The interval at which to calculate returns to base the forecasts upon, e.g. `1D` for daily, `1M` for monthly etc.
     */
    frequency?: string;
    /**
     * The distribution assumed to calculate parametric risk for.
     */
    dist?: GetEthCollectionForecastsRequest.DistEnum;
    /**
     * The start date to pull data for calculations
     */
    start_date?: string;
    /**
     * The end date to pull data for calculations
     */
    end_date?: string;
    /**
     * Set to true, returns confidencve intervals at alpha significance for price on top of forecasts for returns and volatilities
     */
    return_price_forecasts?: boolean;
    /**
     * The significance level, e.g. 0.05 for 95% confidence
     */
    alpha?: number;
    /**
     * The currency to report results in
     */
    rept_curr?: GetEthCollectionForecastsRequest.ReptCurrEnum;
    /**
     * Exclude suspected wash transactions?
     */
    exclude_wash?: boolean;
    arch_params?: GetEthCollectionForecastsRequestArchParams;
}
export namespace GetEthCollectionForecastsRequest {
    export type VoltypeEnum = 'arc' | 'gar' | 'har';
    export const VoltypeEnum = {
        Arc: 'arc' as VoltypeEnum,
        Gar: 'gar' as VoltypeEnum,
        Har: 'har' as VoltypeEnum
    };
    export type DistEnum = 'norm' | 't';
    export const DistEnum = {
        Norm: 'norm' as DistEnum,
        T: 't' as DistEnum
    };
    export type ReptCurrEnum = 'eth' | 'usd';
    export const ReptCurrEnum = {
        Eth: 'eth' as ReptCurrEnum,
        Usd: 'usd' as ReptCurrEnum
    };
}


