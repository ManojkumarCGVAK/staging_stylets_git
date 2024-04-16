import React, { Component } from 'react';
import {withRouter} from "next/router"
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import Cards from 'react-credit-cards';
import isEmpty from '../../validation/is-empty';

class BookingModal extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        postalCode: '',
        guests: 1,
        source: '',
        loading: false,
        success: false,
        errors: {},
        merchantSessionKey: '',
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
        authentication: false,
        acsUrl: false,
        paReq: false,
        transactionId: false,
        bookingIdentifier: false,
        vendorTxCode: false,
        captchaValue:''
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.authentication !== this.state.authentication && this.state.authentication) {
            document.getElementById('pa-form').submit();
        }
    }

    changeHandler = e => {
        e.preventDefault();

        if (e.target.maxLength !== -1 && e.target.value.length > e.target.maxLength) {
            e.target.value = e.target.value.slice(0, e.target.maxLength);
        }

        this.setState({
            [e.target.getAttribute('data-card-details')]: e.target.value,
        });
    };

    onChange = e => {
        e.preventDefault();

        this.setState({ [e.target.name]: e.target.value });
    };

    onCaptchaChange = value => {
		this.setState({ captchaValue: value, errors: { captcha: '' } });

		if (value === null) this.setState({ captchaValue: '' });
	};

    onSubmit = () => {
        // set loading

        if (isEmpty(this.state.captchaValue)) {
			return this.setState({
				errors: {
					captcha: 'You must complete the captcha before sending an enquiry',
				},
			});
		}

        this.setState({ loading: true, errors: {} });

        const bookingPrice =
            this.props.availability.rateAvailability.promoTotals.gross ||
            this.props.availability.rateAvailability.totals.gross;

        const data = {
            company: '',
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            email: this.state.email,
            addressLine1: this.state.addressLine1,
            addressLine2: this.state.addressLine2,
            city: this.state.city,
            postalCode: this.state.postalCode,
            numberOfGuests: this.state.guests,
            source: this.state.source,
            propertyId: this.props.availability.id,
            rateId: this.props.availability.rateAvailability.rateIdentifier,
            dateFrom: this.props.availability.rateAvailability.interval.dateFrom,
            dateTo: this.props.availability.rateAvailability.interval.dateTo,
            amount: bookingPrice * 100,
            promoCode: this.props.availability.rateAvailability.promoCode,
            propertyName: this.props.availability.name,
            propertyAddress: this.props.availability.location,
            name: this.state.name,
            number: this.state.number,
            expiry: this.state.expiry,
            cvc: this.state.cvc,
            timezone:new Date().getTimezoneOffset(),
            url_location:window.location.href,
            availability:this.props.availability.location,
            availability_name:this.props.availability.name
            
        };

        axios
            .post(`/api/booking`, data)
            .then(response => {
                const { merchantSessionKey } = response.data;
                if (merchantSessionKey) {

                    window
                        .sagepayOwnForm({
                            merchantSessionKey,
                        })
                        .tokeniseCardDetails({
                            cardDetails: {
                                cardholderName: data.name,
                                cardNumber: data.number,
                                expiryDate: data.expiry,
                                securityCode: data.cvc,
                            },
                            onTokenised: result => {
                                if (result.success) {
                                    data.merchantSessionKey = merchantSessionKey;
                                    data.cardIdentifier = result.cardIdentifier;

                                    axios
                                        .post('/api/booking/payment', data)
                                        .then(response => {
                                            if (response.data.success) {
                                                this.props.router.replace('/booking-success')
                                                return this.setState({
                                                    success: true,
                                                    vendorTxCode: response.data.vendorTxCode,
                                                    bookingIdentifier: response.data.bookingIdentifier,
                                                });
                                            }
                                            if (response.data.status === '3DAuth') {
                                                const {
                                                    acsUrl,
                                                    cReq:paReq,
                                                    transactionId,
                                                    bookingIdentifier,
                                                    vendorTxCode,
                                                } = response.data;
                                                this.setState({
                                                    authentication: true,
                                                    acsUrl,
                                                    paReq,
                                                    transactionId,
                                                    bookingIdentifier,
                                                    vendorTxCode,
                                                });
                                            }
                                        })
                                        .catch(err =>{
                                            
                                            
                                            this.setState({
                                                errors: {
                                                    paymentError: err.response.data?.message??err.response.data?.statusDetail??JSON.stringify(err.response.data.NotAuthed),
                                                },
                                                loading: false,
                                                success: false,
                                                authentication: false,
                                            })
                                        }
                                        );
                                } else {
                                    if (!result.success) {
                                        const errorObject = {};
                                        if (result.errors.length > 0) {
                                            result.errors.forEach(error => {
                                                switch (error.code) {
                                                    case 1009:
                                                        errorObject.expiry = error.message;
                                                        break;
                                                    case 1007:
                                                        errorObject.number = error.message;
                                                        break;
                                                    case 1004:
                                                        errorObject.cvc = error.message;
                                                        break;
                                                    case 1005:
                                                        errorObject.expiry = error.message;
                                                        break;
                                                    default:
                                                        errorObject[error.code] = error.message;
                                                        break;
                                                }
                                            });
                                        }
                                        this.setState({
                                            errors: errorObject,
                                            loading: false,
                                            success: false,
                                            authentication: false,
                                        });
                                    }
                                }
                            },
                        });
                }
            })
            .catch(err => {
                this.setState({
                    errors: err.response.data,
                    loading: false,
                    success: false,
                });
            });
    };
    close = () =>{
        this.props.close('booking')
    }

    onCaptchaChange = value => {
        this.setState({ captchaValue: value, errors: { captcha: '' } });

        if (value === null) this.setState({ captchaValue: '' });
    };

    render() {
        const { errors, loading, success } = this.state;
        let formContent;
        const { maxOccupancy } = this.props.availability;

        const options = [];

        if (maxOccupancy) {
            for (let i = 1; i <= maxOccupancy; i++) {
                options.push(
                    <option key={i} value={i}>
                        {i}
                    </option>
                );
            }
        }

        if (!success) {
            formContent = (
                <div className='booking-form'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='field'>
                                <label>First Name *</label>
                                <input
                                    placeholder='Jane'
                                    type='text'
                                    name='firstName'
                                    value={this.state.firstName}
                                    onChange={this.onChange}
                                />

                                {errors.firstName ? <p className='error'>{errors.firstName}</p> : null}
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='field'>
                                <label>Last Name *</label>
                                <input
                                    placeholder='Doe'
                                    type='text'
                                    name='lastName'
                                    value={this.state.lastName}
                                    onChange={this.onChange}
                                />

                                {errors.lastName ? <p className='error'>{errors.lastName}</p> : null}
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

                        <div className='col-md-6'>
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
                                <label>Address Line 1 *</label>
                                <input
                                    type='text'
                                    name='addressLine1'
                                    value={this.state.addressLine1}
                                    onChange={this.onChange}
                                />
                                {errors.addressLine1 ? <p className='error'>{errors.addressLine1}</p> : null}
                            </div>
                        </div>

                        <div className='col-md-12'>
                            <div className='field'>
                                <label>Address Line 2</label>
                                <input
                                    type='text'
                                    name='addressLine2'
                                    value={this.state.addressLine2}
                                    onChange={this.onChange}
                                />
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='field'>
                                <label>City</label>
                                <input type='text' name='city' value={this.state.city} onChange={this.onChange} />
                                {errors.city ? <p className='error'>{errors.city}</p> : null}
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='field'>
                                <label>Postal Code</label>
                                <input
                                    type='text'
                                    name='postalCode'
                                    value={this.state.postalCode}
                                    onChange={this.onChange}
                                />
                                {errors.postalCode ? <p className='error'>{errors.postalCode}</p> : null}
                            </div>
                        </div>

                        <div className='col-md-12'>
                            <div className='field'>
                                <label>Guests</label>
                                <select name='guests' value={this.state.guests} onChange={this.onChange}>
                                    {options}
                                </select>

                                {errors.source ? <p className='error'>{errors.source}</p> : null}
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

                        <h5 className='ml-3'>Card Details</h5>

                        <div className='card-section'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='field'>
                                        {/* <label>Card details</label> */}
                                        <Cards
                                            locale={{ valid: 'VALID TO' }}
                                            cvc={this.state.cvc}
                                            expiry={this.state.expiry}
                                            focus={this.state.focus}
                                            name={this.state.name}
                                            number={this.state.number}
                                        />
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className='field'>
                                        <label>Name</label>
                                        <input onChange={this.changeHandler} type='text' data-card-details='name' />
                                        {errors.name ? <p className='error'>{errors.name}</p> : null}
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className='field'>
                                        <label>Card Number</label>
                                        <input
                                            onChange={this.changeHandler}
                                            type='number'
                                            data-card-details='number'
                                        />
                                        {errors.number ? <p className='error'>{errors.number}</p> : null}
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className='field'>
                                        <label>Expiry Date</label>
                                        <input
                                            onChange={this.changeHandler}
                                            type='number'
                                            data-card-details='expiry'
                                            placeholder='MMYY'
                                        />
                                        {errors.expiry ? <p className='error'>{errors.expiry}</p> : null}
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className='field'>
                                        <label>CVC</label>
                                        <input
                                            onChange={this.changeHandler}
                                            type='number'
                                            data-card-details='cvc'
                                            placeholder='123'
                                        />
                                        {errors.cvc ? <p className='error'>{errors.cvc}</p> : null}
                                    </div>
                                </div>

                                <div className='col-md-12'>
                                    <div className='field mb-0'>
                                        <small>
                                            Card details are not stored on our servers. They&apos;re sent securely to SagePay
                                            servers for authorisation & payment processing.
                                        </small>
                                    </div>
                                </div>

                                {this.state.errors.paymentError && (
                                    <p className='ml-3 mt-3 error'>{`*${errors.paymentError} Please try again.`}</p>
                                )}
                            </div>
                        </div>
                        
                    </div>
                </div>
            );
        } else {
            formContent = (
                <div className='booking-form booking-success'>
                    <div className='success'>
                        <h3 className='heading'>{success}</h3>
                        <p>
                            You will receive a confirmation email for your booking shortly. If you have any questions in
                            the meantime, please don&apos;t hesitate to get in touch.
                        </p>
                    </div>
                </div>
            );
        }

        const selfSubmittingForm = this.state.authentication && (
            <React.Fragment>
                <form
                    id='pa-form'
                    method='post'
                    action={this.state.acsUrl}
                > 
                    <input type='hidden' name='creq' value={this.state.paReq} />
                    <input type="hidden" name="threeDSSessionData" value={this.state.transactionId} />
                    {/* <input
                        type='hidden'
                        name='TermUrl'
                        value={`https://www.staylets.co.uk/api/booking/auth-response/${this.state.transactionId}/${this.state.bookingIdentifier}/${this.state.vendorTxCode}/${this.props.availability.name}/${this.props.availability.location}?originUrl=${window.location.href}`}
                        value={`http://localhost:3000/api/booking/auth-response/${this.state.transactionId}/${this.state.bookingIdentifier}/${this.state.vendorTxCode}/${this.props.availability.name}/${this.props.availability.location}?originUrl=${window.location.href}`}
                    /> */}
                    {/* <input type='hidden' name='MD' value={this.state.transactionId} /> */}
                </form>
            </React.Fragment>
        );

        return !success ? (
            <React.Fragment>
                <div
                    className='materail-modal enquiry-modal'
                    id='bookingModal'
                >
                    <div className='modal-dialog' role='document'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h5 className='modal-title' id='exampleModalLabel'>
                                    Booking
                                </h5>
                                <button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={this.close}>
                                    <span aria-hidden='true'>&times;</span>
                                </button>
                            </div>

                            <div className='modal-body'>
                                {formContent}
                                <div style={{marginTop:"15px"}}>
                                    <div className='col-md-12'>
                                        <div className='field google-captcha no-height'>
                                            <ReCAPTCHA
                                                sitekey='6Ler4cQUAAAAAMsd0oaZR2r5ZPP_7Wgs_g8i2I4g'
                                                onChange={this.onCaptchaChange}
                                                />
                                            {errors.captcha ? <p className='error'>{errors.captcha}</p> : null}
                                        </div>
                                    </div>    
                                </div>
                            </div>
                                
                            {!success ? (
                                <div className='modal-footer'>
                                    {loading ? (
                                        <button className='btn btn-secondary'>
                                            <i className='fas fa-circle-notch fa-spin' />
                                        </button>
                                    ) : (
                                        <button className='btn btn-secondary' onClick={this.onSubmit}>
                                            Make Booking
                                        </button>
                                    )}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
                {selfSubmittingForm}
            </React.Fragment>
        ) :null
    }
}


export default withRouter(BookingModal);
