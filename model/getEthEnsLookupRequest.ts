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


export interface GetEthEnsLookupRequest { 
    /**
     * The pagination cursor.
     */
    page?: number;
    /**
     * The number of records returned per page.
     */
    page_size?: GetEthEnsLookupRequest.PageSizeEnum;
    /**
     * The wallet address to query.
     */
    wallet_address?: string;
    /**
     * The name to query.
     */
    name?: string;
}
export namespace GetEthEnsLookupRequest {
    export type PageSizeEnum = 50 | 100 | 500 | 1000;
    export const PageSizeEnum = {
        NUMBER_50: 50 as PageSizeEnum,
        NUMBER_100: 100 as PageSizeEnum,
        NUMBER_500: 500 as PageSizeEnum,
        NUMBER_1000: 1000 as PageSizeEnum
    };
}


