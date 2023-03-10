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
import { GetEthCustomCollectionRiskRequestGarParams } from './getEthCustomCollectionRiskRequestGarParams';
import { GetEthCustomCollectionRiskRequestArcParams } from './getEthCustomCollectionRiskRequestArcParams';
import { GetEthCustomCollectionRiskRequestHarParams } from './getEthCustomCollectionRiskRequestHarParams';


export interface GetEthCustomCollectionRiskRequest { 
    /**
     * The contract address of the token collection.
     */
    collection_address: string;
    /**
     * The holding period to evaluate risk for, e.g. `12M`
     */
    holding_period: string;
    /**
     * The collection percentile(s)
     */
    percentiles?: Array<number>;
    /**
     * The amount of tokens in your portfolio
     */
    amount?: number;
    /**
     * The distribution assumed to calculate parametric risk for
     */
    dist?: GetEthCustomCollectionRiskRequest.DistEnum;
    /**
     * The start date to pull data for calculations
     */
    start_date?: string;
    /**
     * The end date to pull data for calculations
     */
    end_date?: string;
    /**
     * The rate of return for an asset deemed risk free in the contemplated holding period
     */
    risk_free_rate?: number;
    /**
     * Whether to winsorize time series outliers prior to calculating risk
     */
    wins_outliers?: boolean;
    /**
     * The interval at which to calculate returns to base the forecasts upon, e.g. `1D` for daily, `1M` for monthly etc.
     */
    frequency?: string;
    /**
     * The currency to report results in
     */
    rept_curr?: GetEthCustomCollectionRiskRequest.ReptCurrEnum;
    /**
     * Exclude suspected wash transactions?
     */
    exclude_wash?: boolean;
    /**
     * If true, report drawdown volatility (based on negative returns only).
     */
    drawdown?: boolean;
    arc_params?: GetEthCustomCollectionRiskRequestArcParams;
    gar_params?: GetEthCustomCollectionRiskRequestGarParams;
    har_params?: GetEthCustomCollectionRiskRequestHarParams;
}
export namespace GetEthCustomCollectionRiskRequest {
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


