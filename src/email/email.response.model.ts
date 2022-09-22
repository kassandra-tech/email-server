import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

/**
 * Data needed to construct an email.
 */
export class EmailResponseModel {
    /**
     * GUID representing success.
     * @example xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx@kassandra.tech
     */
    public id: string;

    /**
     * Information about the error and why the email can not be sent.
     */
    public error: string;
}
