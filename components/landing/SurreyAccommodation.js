import React, { Component } from "react";
import Link from "next/link";
import { connect } from "react-redux";

// import components
import Locations from "./Locations";
import { getProperties } from "../../actions/propertiesActions";
import Spinner from "../elements/Spinner";
import SellingPointsClickable from "../elements/SellingPointsClickable";
import Gallery from "../property/Gallery";
import ContactForm from "../contact/ContactForm";
import Testimonials from "../elements/Testimonials";
import BlogPosts from "../blog/BlogPosts";

// Images
import Bistro from "../../images/bistro.jpg";
import Bedroom from "../../images/cheltenham/bedroom.jpg";
import Facilities from "../../images/cheltenham/facilities.jpg";
import HolmwoodCommon from "../../images/holmwood-common.jpg";
import Bathroom from "../../images/surrey/bathroom.jpg";
import Bedroom2 from "../../images/surrey/bedroom.jpg";
import Exterior from "../../images/surrey/house-outside.jpg";
import Kitchen from "../../images/surrey/kitchen.jpg";
import Lounge from "../../images/surrey/lounge.jpg";
import Lounge2 from "../../images/surrey/lounge-2.jpg";
import Office from "../../images/surrey/office.jpg";

const items = [
  {
    image: Facilities,
    text: "Long Term Lets",
    link: "/surrey-accommodation/long-term-lets",
  },
  {
    image: Bistro,
    text: "Short Term Lets",
    link: "/surrey-accommodation/short-term-lets",
  },
  {
    image: Bedroom,
    text: "Relocation Breaks",
    link: "/surrey-accommodation/relocation-breaks",
  },
  {
    image: Lounge2,
    text: "Corporate and Business Lets",
    link: "/surrey-accommodation/corporate-business-lets",
  },
  {
    image: Office,
    text: "Holiday Lets",
    link: "/surrey-accommodation/holiday-lets",
  },
];

const images = [Bathroom, Bedroom2, Exterior, Kitchen, Lounge, Lounge2, Office];

const imageArray = images.map((image) => {
  return { original: image.src, thumbnail: image.src };
});

class SurreyAccommodation extends Component {
  constructor() {
    super();
    this.state = {
      surrey: undefined,
    };
  }

  componentDidMount() {
    this.props.getProperties();
    this.setState({
      surrey: JSON.parse(localStorage.getItem("surrey")) || {},
    });
  }

  render() {
    const properties = this.props.loading ? (
      <Spinner />
    ) : (
      <>
        <BlogPosts location="Surrey" posts={this.state.surrey} />
        <Locations title="Other locations" hideLocation="Egham" />
      </>
    );

    return (
      <div className="landing-page">
        <section
          className="hero"
          style={{
            backgroundImage: `linear-gradient( rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8) ), url(${HolmwoodCommon.src})`,
            backgroundPosition: "center",
          }}
        >
          <h2>Surrey Accommodation</h2>
          <Link href="/accommodation/egham/magna-house">
            <a className="btn btn-secondary">Book Now</a>
          </Link>
          {/* <SmoothLink to='landing-contact' smooth={true} offset={-70} className='btn btn-secondary'>
						Book Now
					</SmoothLink> */}
        </section>

        <section className="inner-page">
          <div className="container">
            <div className="selling-points-section">
              <h3 className="heading">
                Fully Furnished Accommodation At A Competitive Price
              </h3>
              <SellingPointsClickable items={items} />
            </div>
          </div>

          <div className="landing-text">
            <div className="container">
              <div className="header">
                <h3 className="heading">Why Choose Us?</h3>
                <hr />
              </div>
              <div className="content">
                <p>
                  As a fully compliant and quality accredited accommodation
                  provider in Surrey, we are proud to provide our clients with
                  full-serviced and purpose-built rental accommodation at a
                  competitive price. Offering an exceptional experience with a
                  great price to match, we aim to please.
                </p>
                <p>
                  Boasting newly refurbished accommodation in easily accessible
                  locations, our properties provide excellent local amenities
                  for your convenience. Offering both serviced apartments and
                  studios, all of our accommodation is available for stays from
                  1 to 365 nights long. So, whether you are staying for a quick
                  business trip or a long term stay, our rental properties in
                  Surrey will meet your needs.
                </p>
                <p>
                  Our selection of rental properties in Surrey offer brilliant
                  flexibility for all types of stays, including corporate and
                  business trips.
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="landing-gallery">
              <div className="landing-gallery__left">
                <div className="header">
                  <h3 className="heading">
                    Clean, Contemporary and Convenient
                  </h3>
                  <hr />
                </div>
                <p>
                  All of our accommodation has recently been renovated to make
                  sure it meets your requirements, regardless of your reason to
                  stay. Providing you with clean, contemporary and convenient
                  accommodation, Stay Lets offers stylish properties to serve as
                  your home away from home.
                </p>
                <p>
                  As well as being fully-serviced, all of our accommodation is
                  also self-contained and fully-furnished for your safety and
                  convenience. Boasting a modern kitchen area, space for you to
                  relax and free WIFI to keep you connected throughout your
                  stay, there is nothing that we haven’t considered to ensure
                  your stay is as comfortable and pleasant as possible.
                </p>
                <p>
                  Convenient online booking is available. Alternatively, you can
                  get in touch to speak to one of our friendly and professional
                  team members. We pride ourselves on our highly personable
                  approach and as such, have a proven track record of care and
                  consideration for our guests.
                </p>
                <p>
                  For stays longer than a week at any of our properties, please
                  contact us directly at{" "}
                  <a href="mailto:bookings@staylets.co.uk?subject=Website Enquiry">
                    bookings@staylets.co.uk
                  </a>{" "}
                  for the best available quote.
                </p>
                <Link href="/accommodation/egham/magna-house">
                  <a className="btn btn-secondary">Book Now</a>
                </Link>
              </div>
              <div className="landing-gallery__right">
                <Gallery images={imageArray} />
              </div>
            </div>
          </div>

          <div className="landing-text covid">
            <div className="container">
              <div>
                <div className="header">
                  <h3 className="heading">Price Match Promise</h3>
                  <hr />
                </div>
                <div className="content">
                  <p>
                    Best rate guarantee. Book directly with us for the best
                    rates available.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container" style={{marginBottom: '3rem'}}>
            <div id="landing-contact" className="landing-contact full">
              <div className="header">
                <h3 className="heading">Make an enquiry</h3>
                <hr />
              </div>
              <div className="landing-contact__right">
                <ContactForm pageSource="Surrey Accommodation Page" />
              </div>
            </div>
          </div>

          {properties}

          <Testimonials />
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.properties.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProperties: (config) => dispatch(getProperties(config)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurreyAccommodation);
