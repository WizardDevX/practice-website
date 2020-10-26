import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import { createTransport, SendMailOptions } from "nodemailer";

const mail: NextApiHandler = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	if (req.method === "POST") {
		const { name, email, subject } = req.body.form;

		const transporter = createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: process.env.USER,
				pass: process.env.PASS,
			},
			tls: {
				rejectUnauthorized: false,
			},
		});

		const mailOptions: SendMailOptions = {
			from: process.env.USER,
			to: email,
			subject,
			html: `
                <h2>Hola ${name}</h2>
                <h3>Gracias por contactarnos</h3>
            `,
		};
		await transporter.sendMail(mailOptions);

		res.send("Email enviado");
	}
};

export default mail;
