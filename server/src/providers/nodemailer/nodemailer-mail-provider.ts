import { MailProvider, SendMailData } from "../mail-provider";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e91f6ca1cc1065",
    pass: "337165dbc070eb"
  }
});

export class NodemailerMailProvider implements MailProvider {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Lucas Porto <lucasportom28@gmail.com>',
      subject,
      html: body
    })
  }
}