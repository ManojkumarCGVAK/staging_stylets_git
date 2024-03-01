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
import Offices from "../../images/cheltenham/offices.jpg";
import Facilities from "../../images/cheltenham/facilities.jpg";
import Bedroom2 from "../../images/cheltenham/bedroom2.jpg";
import Bedroom3 from "../../images/cheltenham/bedroom3.jpg";
import Exterior2 from "../../images/cheltenham/exterior2.jpg";
import Kitchen from "../../images/cheltenham/kitchen.jpg";
import Kitchen2 from "../../images/cheltenham/kitchen2.jpg";
import Kitchen3 from "../../images/cheltenham/kitchen3.jpg";
import Lounge from "../../images/cheltenham/lounge.jpg";

const items = [
  {
    image: Facilities,
    text: "Long Term Lets",
    link: "/cheltenham-accommodation/long-term-lets",
  },
  {
    image: Bistro,
    text: "Short Term Lets",
    link: "/cheltenham-accommodation/short-term-lets",
  },
  {
    image: Bedroom,
    text: "Relocation Breaks",
    link: "/cheltenham-accommodation/relocation-breaks",
  },
  {
    image: Lounge,
    text: "Corporate and Business Lets",
    link: "/cheltenham-accommodation/corporate-business-lets",
  },
  {
    image: Kitchen,
    text: "Holiday Lets",
    link: "/cheltenham-accommodation/holiday-lets",
  },
];

const images = [
  Exterior2,
  Lounge,
  Bedroom2,
  Bedroom3,
  Kitchen,
  Kitchen2,
  Kitchen3,
];

const imageArray = images.map((image) => {
  return { original: image.src, thumbnail: image.src };
});

class CheltenhamAccommodation extends Component {
  constructor() {
    super();
    this.state = {
      cheltenham: undefined,
    };
  }

  componentDidMount() {
    this.props.getProperties();
    this.setState({
      cheltenham: JSON.parse(localStorage.getItem("cheltenham")) || {},
    });
  }

  render() {
    const properties = this.props.loading ? (
      <Spinner />
    ) : (
      <>
        <BlogPosts location="Cheltenham" posts={this.state.cheltenham} />
        <Locations title="Other locations" hideLocation="Cheltenham" />
      </>
    );

    return (
      <div className="landing-page">
        <section
          className="hero"
          style={{
            backgroundImage: `linear-gradient( rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8) ), url(${Offices.src})`,
            backgroundPosition: "center",
          }}
        >
          <h2>Cheltenham Accommodation</h2>
          <Link href="/accommodation/cheltenham/spa-court">
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
                Competitively Priced, Fully Furnished Accommodation
              </h3>
              <SellingPointsClickable items={items} />
            </div>
          </div>

          <div className="container">
            <div className="landing-gallery">
              <div className="landing-gallery__left">
                <div className="header">
                  <h3 className="heading">
                    Contemporary, Comfortable and Convenient
                  </h3>
                  <hr />
                </div>
                <p>
                  All of our accommodation has been recently renovated to ensure
                  it meets your needs, regardless of your reason to stay.
                  Providing you with clean, contemporary and convenient
                  accommodation, we like to think of our stylish properties as a
                  home away from home.
                </p>
                <p>
                  As well as being fully-serviced accommodation, all of our
                  self-contained accommodation in Cheltenham is also
                  fully-furnished. Boasting a modern kitchen area, space for you
                  to relax and free WIFI to keep you connected throughout your
                  stay, there is nothing that hasn’t been considered by our team
                  to make your visit as comfortable as possible.
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
                <Link href="/accommodation/cheltenham/spa-court">
                  <a className="btn btn-secondary">Book Now</a>
                </Link>
              </div>
              <div className="landing-gallery__right">
                <Gallery images={imageArray} />
              </div>
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
                  At StayLets, we are proud to be a fully compliant and quality
                  accredited accommodation provider in Cheltenham,
                  Gloucestershire. As a privately-owned company, we provide
                  fully serviced, purpose-built rental accommodation at
                  competitive prices, giving you an excellent experience with an
                  excellent price to match.
                </p>
                <p>
                  Our accommodation is newly refurbished, in a great central
                  location and has great local amenities for your convenience.
                  StayLets offers both serviced apartments and studios, which
                  are available for stays from 2 to 365 nights long. So, whether
                  you are staying for a quick business trip or a long term stay,
                  our properties will meet your needs.
                </p>
                <p>
                  Our range of properties offer fantastic flexibility for all
                  types of stays, equally well suited to corporate and business
                  trips.
                </p>
              </div>
            </div>
          </div>

          <div className="landing-text">
            <div className="container">
              <div className="header">
                <h3 className="heading">Why choose Cheltenham</h3>
                <hr />
              </div>
              <div className="content">
                <p>
                  Cheltenham has recently rebranded itself &quot;The Festival
                  Town&quot;. Described as the Cultural Capital of the Cotswolds
                  an article on Cheltenham by the New York Times described the
                  town as enjoying a cultural renaissance with many
                  &quot;happening spots&quot;. The Independent called the town a
                  &quot;Design Destination&quot; with stylish places to eat and
                  drink.
                </p>
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
                <ContactForm pageSource="Cheltenham Accommodation Page" />
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
)(CheltenhamAccommodation);
