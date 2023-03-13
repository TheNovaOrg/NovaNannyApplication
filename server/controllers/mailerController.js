import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';
import ENV from '../config.js';

const mailerConfig = {
    service: 'gmail',
    auth: {
        user: ENV.EMAIL,
        pass: ENV.PASSWORD
    }
};

let transporter = nodemailer.createTransport(mailerConfig);

const mailGenerator = new Mailgen({
    theme: 'default',
    product: {
        // Appears in header & footer of e-mails
        name: 'Mailgen',
        link: 'https://mailgen.js/'
    }
});

// POST: http://localhost:3002/api/registerEmail 
// @param: {
//     "username" : "example123",
//     "userEmail" : "admin123@gmail.com",
//     "text" : "",
//     "subject" : "",
//   }
export async function registerEmail(req, res) {
    try {
        const { username, userEmail, subject, text } = req.body;
        // email body
        const email = {
            body: {
                name: username,
                intro: text || 'Welcome to Nova Nanny!! We\'re very excited to have you on board.',
                outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.',
            }
        };
        // Generate an HTML email with the provided contents
        const emailBody = mailGenerator.generate(email);

        let message = {
            from: ENV.EMAIL,
            to: userEmail,
            subject: subject || "Signup Successfull!!",
            html: emailBody
        }

        // send mail
        transporter.sendMail(message)
            .then(() => {
                return res.status(200).send({ msg: "You should receive an email from us soon." })
            })
            .catch(error => res.status(500).send({ error }));

    } catch (error) {
        return res.status(500).send("Something went wrong with Email Registration.");
    }
}
