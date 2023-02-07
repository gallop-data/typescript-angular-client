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


export interface GetEthLeaderBoardRequest { 
    /**
     * The pagination cursor.
     */
    page?: number;
    /**
     * The number of records returned per page.
     */
    page_size?: GetEthLeaderBoardRequest.PageSizeEnum;
    /**
     * The requested time interval
     */
    interval: GetEthLeaderBoardRequest.IntervalEnum;
    /**
     * The requested calculation metric
     */
    ranking_metric: GetEthLeaderBoardRequest.RankingMetricEnum;
}
export namespace GetEthLeaderBoardRequest {
    export type PageSizeEnum = 50 | 100 | 500 | 1000;
    export const PageSizeEnum = {
        NUMBER_50: 50 as PageSizeEnum,
        NUMBER_100: 100 as PageSizeEnum,
        NUMBER_500: 500 as PageSizeEnum,
        NUMBER_1000: 1000 as PageSizeEnum
    };
    export type IntervalEnum = 'one_day' | 'seven_days' | 'thirty_days' | 'ninety_days' | 'all_time';
    export const IntervalEnum = {
        OneDay: 'one_day' as IntervalEnum,
        SevenDays: 'seven_days' as IntervalEnum,
        ThirtyDays: 'thirty_days' as IntervalEnum,
        NinetyDays: 'ninety_days' as IntervalEnum,
        AllTime: 'all_time' as IntervalEnum
    };
    export type RankingMetricEnum = 'eth_volume' | 'sales_count';
    export const RankingMetricEnum = {
        EthVolume: 'eth_volume' as RankingMetricEnum,
        SalesCount: 'sales_count' as RankingMetricEnum
    };
}

