import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import isEmpty from '../../validation/is-empty';
import axios from 'axios';

class EnquiryModal extends Component {
	state = {
		name: '',
		email: '',
		phone: '',
		property: '',
		messsage: '',
		captchaValue: '',
		source: '',
		loading: false,
		success: false,
		errors: {},
	};

	componentDidMount() {
		if (this.props.property.name && this.props.property.location) {
			this.setState({
				property: `${this.props.property.propertyTypeName}, ${this.props.property.location}`,
			});
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.property !== this.props.property) {
			this.setState({
				property: `${this.props.property.propertyTypeName}, ${this.props.property.location}`,
			});
		}
	}

	onChange = e => {
		e.preventDefault();

		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e => {
		if (isEmpty(this.state.captchaValue)) {
			return this.setState({
				errors: {
					captcha: 'You must complete the captcha before sending an enquiry',
				},
			});
		}

		// set loading
		this.setState({ loading: true, errors: {} });

		const data = {
			name: this.state.name,
			phone: this.state.phone,
			email: this.state.email,
			property: this.state.property,
			message: this.state.message,
			source: this.state.source,
		};

		axios
			.post('/api/contact', data)
			.then(success => {
				this.setState({
					loading: false,
					success: true,
					name: '',
					phone: '',
					email: '',
					property: '',
					message: '',
					source: '',
					errors: {},
				});
			})
			.catch(err => {
				this.setState({
					errors: err.response.data,
					loading: false,
					success: false,
				});
			});
	};

	onCaptchaChange = value => {
		this.setState({ captchaValue: value, errors: { captcha: '' } });

		if (value === null) this.setState({ captchaValue: '' });
	};

	closeDialog = () =>{
		this.props.close('enquiry')
	}

	render() {
		const { errors, loading, success } = this.state;
		let formContent;

		if (!success) {
			formContent = (
				<div className='enquiry-form'>
					<div className='row'>
						<div className='col-md-6'>
							<div className='field'>
								<label>Name *</label>
								<input
									placeholder='Jane Doe'
									type='text'
									name='name'
									value={this.state.name}
									onChange={this.onChange}
								/>

								{errors.name ? <p className='error'>{errors.name}</p> : null}
							</div>
						</div>

						<div className='col-md-6'>
							<div className='field'>
								<label>Phone</label>
								<input
									placeholder='07123 456789'
									type='text'
									name='phone'
									value={this.state.phone}
									onChange={this.onChange}
								/>

								{errors.phone ? <p className='error'>{errors.phone}</p> : null}
							</div>
						</div>

						<div className='col-md-12'>
							<div className='field'>
								<label>Email *</label>
								<input
									placeholder='jane.doe@gmail.com'
									type='text'
									name='email'
									value={this.state.email}
									onChange={this.onChange}
								/>

								{errors.email ? <p className='error'>{errors.email}</p> : null}
							</div>
						</div>

						<div className='col-md-12'>
							<div className='field'>
								<label>Property</label>
								<input readOnly={true} type='text' name='property' value={this.state.property} />
							</div>
						</div>

						<div className='col-md-12'>
							<div className='field'>
								<label>How did you find us?</label>
								<select name='source' value={this.state.source} onChange={this.onChange}>
									<option value=''>Select an option</option>
									<option value='Recommended by a friend / family'>
										Recommended by a friend / family
									</option>
									<option value='Google search results'>Google search results</option>
									<option value='Via blog posts'>Via blog posts</option>
									<option value='Social media'>Social media</option>
								</select>

								{errors.source ? <p className='error'>{errors.source}</p> : null}
							</div>
						</div>

						<div className='col-md-12'>
							<div className='field'>
								<label>Message *</label>
								<textarea
									placeholder="I'd like to make a quick enquiry about..."
									name='message'
									rows='6'
									value={this.state.message}
									onChange={this.onChange}
								/>

								{errors.message ? <p className='error'>{errors.message}</p> : null}
							</div>
						</div>

						<div className='col-md-12'>
							<div className='field google-captcha'>
								<ReCAPTCHA
									sitekey='6Ler4cQUAAAAAMsd0oaZR2r5ZPP_7Wgs_g8i2I4g'
									onChange={this.onCaptchaChange}
								/>
								{errors.captcha ? <p className='error'>{errors.captcha}</p> : null}
							</div>
						</div>

						<div className='col-md-12'>
							<div className='field mb-0'>
								<p>
									We typically reply via email, if our response appears delayed, please check that our
									emails aren&apos;t going through to your spam or junk folders.
								</p>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			formContent = (
				<div className='enquiry-form enquiry-success'>
					<div className='success'>
						<h3 className='heading'>Thanks for getting in touch!</h3>
						<p>
							We typically reply via email, if our response appears delayed, please check that our emails
							aren&apos;t going through to your spam or junk folders.
						</p>
					</div>
				</div>
			);
		}

		return (
			<div
				className='materail-modal enquiry-modal'
				id='enquiryModal'
			>
				<div className='modal-dialog' role='document'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								Request Details
							</h5>
							<button type='button' className='close' onClick={this.closeDialog}>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>

						<div className='modal-body'>{formContent}</div>

						{!success ? (
							<div className='modal-footer'>
								{loading ? (
									<button className='btn btn-secondary'>
										<i className='fas fa-circle-notch fa-spin' />
									</button>
								) : (
									<button className='btn btn-secondary' onClick={this.onSubmit}>
										Send Enquiry
									</button>
								)}
							</div>
						) : null}
					</div>
				</div>
			</div>
		);
	}
}

export default EnquiryModal;
