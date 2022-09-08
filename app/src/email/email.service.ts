import { Injectable } from '@nestjs/common';
import Mail from 'nodemailer/lib/mailer';
import { EmailModel } from "./email.model";
import { EmailResponseModel } from './email.response.model';

const nodemailer = require('nodemailer');
require('dotenv').config();

const { User, Password, FromAddress } = process.env;
const transporter: Mail = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            user: User,
            pass: Password
        }
    });

/**
 * Allows sending emails from the provided Gmail account provided in the environment.
 * The transport to send emails through Gmail is setup at runtime with the provided account information in the enviornment.
 * Environment variables
 * User - required - Gmail account to send emails from.
 * Password - required - Gmail Application ID
 * FromAddress - optional - When set will override the to address so emails are sent from one address.
 */
@Injectable()
export class EmailService {
    /**
     * Send email from the account provided in the environment.
     * The sender will get the email message as well as the account in the environment.
     * @param body use the 'text' property for standard text formatted messages,
     *             when the 'html' property is used the email will be formatted in HTML.
     * @returns Information about the status of the email.
     */
    public async sendEmail(body: EmailModel): Promise<EmailResponseModel> {
        body.to = body.from + ',' + FromAddress;
        body.from = FromAddress;
        var responseMsg = new EmailResponseModel();

        await transporter.sendMail(body)
            .then((result) => {
                responseMsg.id = result.messageId;
            })
            .catch((error) => {
                responseMsg.error = error + " - Unable to send email";
            });
        
        return responseMsg;
    }
}
