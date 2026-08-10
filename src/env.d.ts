import { UserConfig } from "@oapiex/sdk-kit";



declare module '@oapiex/sdk-kit' {
    interface UserConfig {
        apiKey: string;
    }
}