import { InitOptions as BaseInitOptions } from "@oapiex/sdk-kit";

export interface InitOptions extends BaseInitOptions {
    /**
     * Your API Key
     */
    apiKey?: string;
}