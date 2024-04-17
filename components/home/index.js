import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Link from "next/link";

// import components
import HeroImage from "../../images/hero-image.png";
import Filter from "./Filter";
import Locations from "./Locations";
import Spinner from "../elements/Spinner";
import BlogPosts from "../blog/BlogPosts";
import BookingPopup from "../elements/BookingPopup";
import Gallery from "./Gallery";
import Testimonials from "../elements/Testimonials";
import Imagefu from "next/future/image";

class index extends Component {
  componentDidMount() {
    window.localStorage.setItem(
      "cheltenham",
      JSON.stringify(this.props.Cheltenham.slice(0, 4))
    );
    window.localStorage.setItem(
      "surrey",
      JSON.stringify(this.props.Surrey.slice(0, 4))
    );
  }

  render() {
    const properties = this.props.loading ? <Spinner /> : <Locations />;

    return (
      <Fragment>
        <div className="homepage">
          <section className="hero">
            <div className="container">
              <Link href="/accommodation">
                <a>
                  <Imagefu
                    id="bedroom_img"
                    src={HeroImage}
                    alt="Bedroom"
                    width="1110"
                    lazy="true"
                    priority={100}
                    placeholder="bedroom_img"
                  />
                </a>
              </Link>
            </div>
          </section>

          <section className="inner-page">
            <BookingPopup />
            <Filter />
            <div className="container">
              <div className="inner-page__intro">
                <p>
                  We all want <strong>comfort</strong>, <strong>value</strong>{" "}
                  and <strong>flexibility</strong> when we&apos;re looking for
                  accommodation these days, no matter the reason whether it is
                  business or pleasure...
                </p>
                <div className="speech-bubble">
                  <h2>
                    If you&apos;re tired of scruffy &quot;budget&quot;
                    accommodation, dusty B&Bs, or the rules and restrictions
                    that come with often characterless hotels, then look no
                    further than Staylets.
                  </h2>
                  <small>
                    Stay as long as you want! If you are searching for a base to
                    stay for a longer period, we can take care of that for you,
                    and for great value too. Please contact us on{" "}
                    <a href="mailto:bookings@staylets.co.uk?subject=Website Enquiry">
                      bookings@staylets.co.uk
                    </a>{" "}
                    for the best discounted rates.
                  </small>
                </div>
                <div className="button">
                  <Link href="/about-us">
                    <a className="btn btn-secondary bordered">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
            <Gallery />
            <div className="container text-center home-subheader">
              <h2>Serviced Apartments in Cheltenham and Surrey</h2>
            </div>
            {properties}
            <div className="container">
              <div className="accredited">
                <div className="header">
                  <h3 className="heading">Accredited ASAP Member</h3>
                  <hr />
                </div>
                <div className="accredited__content">
                  <p>
                    Our status as an Accredited ASAP Member means we have
                    proudly met all prescribed regulations and best practice
                    standards of safety, security, customer service and duty of
                    care. The new ‘ASAP Stay with Confidence Promise’ has just
                    become part of our ISAAP Accreditation, reassuring guests
                    they will meet hygiene standards that are truly COVID-19
                    proof. Details{" "}
                    <a
                      href="https://theasap.org.uk/wp-content/uploads/2020/05/ASAP-Stay-with-Confidence-Promise.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      can be viewed here
                    </a>
                    .
                  </p>
                  <ul>
                    <li>
                      <a
                        href="https://www.linkedin.com/groups/3710627/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/ASAPThe"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/ASAPThe/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <BlogPosts posts={this.props.posts} />
            <BlogPosts location="Cheltenham" posts={this.props.Cheltenham} />
            <BlogPosts location="Surrey" posts={this.props.Surrey} />
            <Testimonials />
          </section>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.properties.loading,
  };
};

export default connect(mapStateToProps, null)(index);
