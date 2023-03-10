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


export interface GetEthWashTransactionsRequest { 
    /**
     * The collection address to search.
     */
    collection_address: string;
    /**
     * An optional list of token ids.
     */
    token_id?: Array<string>;
    /**
     * The pagination cursor.
     */
    page?: number;
    /**
     * The number of records returned per page.
     */
    page_size?: GetEthWashTransactionsRequest.PageSizeEnum;
}
export namespace GetEthWashTransactionsRequest {
    export type PageSizeEnum = 50 | 100 | 500 | 1000;
    export const PageSizeEnum = {
        NUMBER_50: 50 as PageSizeEnum,
        NUMBER_100: 100 as PageSizeEnum,
        NUMBER_500: 500 as PageSizeEnum,
        NUMBER_1000: 1000 as PageSizeEnum
    };
}


