
const transporter = require('../../config/nodemailer') 
const validateFormEnquiry = require('../../validation/form-enquiry') 
// const authenticate = require('../../../serverutil/authenticate');
const keys = require('../../config/keys');
const axios = require('axios');


export default async function handler(req, res) {

    if(req.method === 'POST'){
        const { errors, isValid } = validateFormEnquiry(req.body);
        
	// check validation for any errors
	if (!isValid) {
		return res.status(400).json(errors);
	}
	return transporter
		.sendMail({
			to: 'ask@staylets.co.uk',
			bcc: 'april.trigg@brace.co.uk, luc.berger@brace.co.uk',
			from: keys.OUTLOOK_EMAIL,
			subject: `New Contact For Enquiry from ${req.body.name}`,
			html: `<strong>Name:</strong> ${req.body.name}<br/>
			${
				req.body.company
					? '<strong>Company:</strong> ' + req.body.company + '<br/>'
					: ''
			}
			<strong>Email:</strong> ${req.body.email}<br/>
			<strong>Phone:</strong> ${req.body.phone}<br/>
			${
				req.body.property
					? '<strong>Property:</strong> ' +
					  req.body.property +
					  '<br/>'
					: ''
			}
			<strong>Source:</strong> ${req.body.source}<br/>
			${
				req.body.pageSource
					? '<strong>Page Source:</strong> ' +
					  req.body.pageSource +
					  '<br/>'
					: ''
			}
			<strong>Message:</strong> ${req.body.message}`,
		})
		.then(email => res.json({ success: 'Email sent successfully' }))
		.catch(err => {
			// console.log(err);
			res.status(400).json({
				email: 'Something went wrong with your enquiry',
			});
		});
    }

}
