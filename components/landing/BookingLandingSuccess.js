import React, { Component } from 'react';
import HeroImage from '../../images/hero-image.png';
import Image from 'next/future/image'

class BookingLandingSuccess extends Component {
    render() {
        return (
            <div className='landing-page'>
                <main className='content-page'>
                    <section className='container'>
                        <div className='row'>
                            <div className='col-md-10 mx-auto hero__booking'>
                                <Image src={HeroImage} alt='Bedroom' />
                            </div>
                        </div>
                    </section>

                    <section className='container'>
                        <div className='row'>
                            <div className='col-md-10 mx-auto'>
                                <div className='main-content'>
                                    <div className='text-content'>
                                        <h1 className='text-center'>Thank you for booking with us!</h1>
                                        <p className='text-center mt-5'>
                                            Thank you for choosing Stay Lets for your reservation. We&apos;re dedicated to
                                            giving you the best experience possible. If you have any questions about
                                            your stay, please get in touch. You&apos;ll receive an email confirming your
                                            booking details shortly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default BookingLandingSuccess;
