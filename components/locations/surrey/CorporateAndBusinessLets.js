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
    text: LetsData["corporate-business-lets"].usp[0],
  },
  {
    image: Bistro,
    text: LetsData["corporate-business-lets"].usp[1],
  },
  {
    image: Bedroom,
    text: LetsData["corporate-business-lets"].usp[2],
  },
];

const CorporateAndBusinessLets = () => {
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
            <h3 className="heading">Corporate And Business Lets in Surrey</h3>
            <div className="content">
              <p>{LetsData["corporate-business-lets"].header}</p>
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
              <p>{LetsData["corporate-business-lets"].location}</p>
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
              <p>{LetsData["corporate-business-lets"].staylets}</p>
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
              <p>{LetsData["corporate-business-lets"].works}</p>
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
              heading={"How long can I stay for?"}
              content={
                "At StayLets, we recognise that certain business projects may extend beyond a few days, with tasks lasting weeks, months, or even longer. That's why we offer accommodations for extended periods, including stays of up to a year and beyond, with the added benefit of a discount for these longer durations."
              }
            />

            <FAQAccordion
              heading={"Is there Wi-Fi?"}
              content={
                "Absolutely. We ensure that essential home features, including Wi-Fi, are included free of charge in each of our properties. While we strive for the strongest connection, if a connection loss occurs beyond our control, we cannot be held liable."
              }
            />

            <FAQAccordion
              heading={"When can I check in?"}
              content={
                "For all our properties, the standard check-in time is 3:00 pm on the day of arrival, and check-out must be completed by 11:00 am on the departure day. However, if you need an earlier check-in or later check-out time, we will make every effort to accommodate your request."
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

export default CorporateAndBusinessLets;
