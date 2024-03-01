const nodemailer = require('nodemailer');
const keys = require('./keys');
const transporter = nodemailer.createTransport({
	// service: 'gmail',
	// auth: {
	// 	user: keys.GMAIL_USER,
	// 	pass: keys.GMAIL_PASS,
	// },
	service: 'Outlook365',
	auth: {
		user: keys.OUTLOOK_EMAIL,
		pass: keys.OUTLOOK_PASS,
	},
	tls: {
		rejectUnauthorized: false, // don't verify certificates
		ciphers: 'SSLv3',
	},
});
module.exports =  transporter;

