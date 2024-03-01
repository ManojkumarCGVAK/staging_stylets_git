import React from "react";
import Link from "next/link";

import Filter from "../../landing/Filter";
import Gallery from "../../property/Gallery";
import SellingPoints from "../../elements/SellingPoints";
import NewContactForm from "../../contact/NewContactForm";
import FAQAccordion from "../../accordion";

// Images
import SpaCourt from "../../../images/buildings/spa-court.jpg";
import Bistro from "../../../images/bistro.jpg";
import Bedroom from "../../../images/buildings/bedroom.jpg";
import Lounge from "../../../images/buildings/property.jpg";

import { imageArray } from "./images";
import LetsData from "./data.json";

const items = [
  {
    image: Lounge,
    text: LetsData["long-term-lets"].usp[0],
  },
  {
    image: Bistro,
    text: LetsData["long-term-lets"].usp[1],
  },
  {
    image: Bedroom,
    text: LetsData["long-term-lets"].usp[2],
  },
];

const LongTermLets = () => {
  return (
    <div className="landing-page">
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${SpaCourt.src})`,
        }}
      >
        <Filter />
      </section>

      <section className="inner-page">
        <div className="container">
          <div className="selling-points-section">
            <h3 className="heading">Long Term Lets in Cheltenham</h3>
            <div className="content">
              <p>{LetsData["long-term-lets"].header}</p>
            </div>
            <SellingPoints items={items} />
          </div>
        </div>

        <div className="landing-text">
          <div className="container">
            <div className="header">
              <h3 className="heading">Location and Accommodation Specifics</h3>
              <hr />
            </div>
            <div className="content">
              <p>{LetsData["long-term-lets"].location}</p>
            </div>
            <Link href="/accommodation/cheltenham">
              <a className="btn btn-secondary">Book Now</a>
            </Link>
          </div>
        </div>

        <div className="container">
          <div className="landing-gallery">
            <div className="landing-gallery__left">
              <div className="header">
                <h3 className="heading">Purpose Built Accommodation</h3>
                <hr />
              </div>
              <p>
                Our stylish recently renovated accommodation offers all the
                comforts of home away from home.
              </p>
              <p>
                Competitively priced accommodation, much more competitive than
                hotels for longer stays.
              </p>
              <p>
                Self-contained living accommodation with a kitchen area and
                plenty of space to relax and free Wi-Fi. Areas where you can
                work if you need to and the freedom to come and go as you see
                fit.
              </p>
              <p>
                Convenient online booking is available or speak to one of our
                team. We pride ourselves on our highly personable approach. Our
                team has a proven track record of care and consideration for our
                guests.
              </p>
              <p>
                Our locations are conveniently located with great transport
                connections and local amenities.
              </p>
              <Link href="/accommodation/cheltenham">
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
              <h3 className="heading">Why Choose StayLets Over a Hotel?</h3>
              <hr />
            </div>
            <div className="content">
              <p>{LetsData["long-term-lets"].staylets}</p>
            </div>
          </div>
        </div>

        <div className="landing-text">
          <div className="container">
            <div className="header">
              <h3 className="heading">How it Works</h3>
              <hr />
            </div>
            <div className="content">
              <p>{LetsData["long-term-lets"].works}</p>
            </div>
          </div>
        </div>

        <div className="landing-text">
          <div className="container">
            <div className="header">
              <h3 className="heading">FAQs</h3>
              <hr />
            </div>
            <FAQAccordion
              heading={"Is there a limit on how long I can stay?"}
              content={
                <>
                  Whether you want to stay for a few weeks or a whole year, as
                  long as the property is available, you have first-choice
                  priority on the accommodation. Simply select the dates you
                  would like the stay on our website. Alternatively, you can
                  email{" "}
                  <a href="mailto:bookings@staylets.co.uk?subject=Website Enquiry">
                    bookings@staylets.co.uk
                  </a>{" "}
                  for the best possible quote.
                </>
              }
            />

            <FAQAccordion
              heading={"What happens if I need to make a cancellation?"}
              content={
                "If you need to cancel your stay with us, this must be done via email. If we are notified more than 7 days before the first date is cancelled on stays over 6 nights, then all payments will be refunded to the client. However, if we are notified in less time than stated then the full cost will be taken. It’s always advised that travel and personal insurance be taken out to cover these charges if cancellations need to be made. "
              }
            />

            <FAQAccordion
              heading={"What are the check-in and check-out times?"}
              content={
                "All of our apartments are available from 4.00 pm for arrival and must be vacated by 10.00 am on the day of departure. If you do need a later check out then speak to a member of our team to see how we can accommodate. "
              }
            />

            <FAQAccordion
              heading={"Can I bring a pet with me for long-term stays?"}
              content={
                <>
                  In general we do not allow pets, but please contact us
                  directly on{" "}
                  <a href="mailto:ask@staylets.co.uk">ask@staylets.co.uk</a> to
                  discuss the options, as we try to be as flexible as possible.
                </>
              }
            />
            <Link href="/accommodation/cheltenham">
              <a className="btn btn-secondary">Book Now</a>
            </Link>
          </div>
        </div>

        <NewContactForm />
      </section>
    </div>
  );
};

export default LongTermLets;
