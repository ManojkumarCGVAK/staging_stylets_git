import React from "react";
import Link from "next/link";

import Filter from "../../landing/Filter";
import Gallery from "../../property/Gallery";
import SellingPoints from "../../elements/SellingPoints";
import NewContactForm from "../../contact/NewContactForm";
import FAQAccordion from "../../accordion";

// Images
import MagnaHouse from "../../../images/buildings/magna-house.jpg";
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
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${MagnaHouse.src})`,
        }}
      >
        <Filter />
      </section>

      <section className="inner-page">
        <div className="container">
          <div className="selling-points-section">
            <h3 className="heading">Long Term Lets in Surrey</h3>
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
            <Link href="/accommodation/egham">
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
              <Link href="/accommodation/egham">
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
              heading={"What is the cancellation policy?"}
              content={
                "In the event of a cancellation, please notify us via email. If the cancellation is made more than 7 days before the first date for stays over 6 nights, a full refund will be issued. However, if the notification is within a shorter timeframe, the full cost will be incurred. Therefore, it is recommended to have travel and personal insurance to cover these charges in case of cancellations."
              }
            />

            <FAQAccordion
              heading={"Is there a limit on the duration of my stay?"}
              content={
                <>
                  Whether you're planning a fortnight visit or an extended stay
                  of a month or more, you have the first choice priority for
                  accommodation as long as the property is available. Simply
                  choose your desired dates on our website or contact{" "}
                  <a href="mailto:bookings@staylets.co.uk?subject=Website Enquiry">
                    bookings@staylets.co.uk
                  </a>{" "}
                  for a customised quote.
                </>
              }
            />

            <FAQAccordion
              heading={"Can I bring a pet for long-term stays?"}
              content={
                <>
                  In general we do not allow pets, but please contact us
                  directly on{" "}
                  <a href="mailto:ask@staylets.co.uk">ask@staylets.co.uk</a> to
                  discuss the options, as we try to be as flexible as possible.
                </>
              }
            />

            <FAQAccordion
              heading={"What are the check-in and check-out times?"}
              content={
                "All our apartments are ready for check-in from 4:00 pm on the day of arrival and should be vacated by 10:00 am on the departure day. For those requiring a later check-out, please consult with a member of our team for possible solutions and accommodations."
              }
            />
            <Link href="/accommodation/egham">
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
