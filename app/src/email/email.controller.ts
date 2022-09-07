import { Body, Controller, Post, } from '@nestjs/common';
import {
    ApiBody,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { EmailModel } from './email.model';
import { EmailService } from './email.service';

/**
 * Provides Email API routes.
 */
@ApiTags('email')
@Controller('email')
export class EmailController {
    constructor(private readonly emailService: EmailService) {
    }

    /**
     * Send an email.
     * @param body Information to send in the email.
     * @returns Status of the email.
     */
    @Post()
    @ApiBody({
        description: "Information to send in the email.",
        type: EmailModel,
        required: true
    })
    @ApiResponse({
        status: 200,
        description: 'message_id: <xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx@kassandra.tech>',
    })
    async sendEmail(@Body() body: EmailModel): Promise<string> {
        return await this.emailService.sendEmail(body);
    }
}
