import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

/**
 * Data needed to construct an email.
 */
export class EmailModel {
    /**
     * Email address to send the email to.
     * Note: if no address is given, the environment service address will be used.
     * @example you@google.com
     */
     @ApiPropertyOptional()
    public to: string = "";

    /**
     * Email address the email will be sent from.
     * @example me@google.com
     */
     @ApiProperty()
    public from: string;

    /**
     * Name or username of the person sending the email.
     */
     @ApiProperty()
    public name: string;

    /**
     * What is the email about?
     */
     @ApiPropertyOptional()
    public subject: string = "";

    /**
     * Body of the email.
     */
     @ApiPropertyOptional()
    public text: string = "";

    /**
     * Body of the email in HTML format.
     */
     @ApiPropertyOptional()
    public html: string = "";
}
