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
    text: LetsData["holiday-lets"].usp[0],
  },
  {
    image: Bistro,
    text: LetsData["holiday-lets"].usp[1],
  },
  {
    image: Bedroom,
    text: LetsData["holiday-lets"].usp[2],
  },
];

const HolidayLets = () => {
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
            <h3 className="heading">Holiday Lets in Surrey</h3>
            <div className="content">
              <p>{LetsData["holiday-lets"].header}</p>
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
              <p>{LetsData["holiday-lets"].location}</p>
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
              <p>{LetsData["holiday-lets"].staylets}</p>
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
              <p>{LetsData["holiday-lets"].works}</p>
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
              heading={"Is there a policy on pets?"}
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
              heading={"What are the accommodation size options?"}
              content={
                "At StayLets, we take pride in offering a diverse range of accommodation options to suit your party size. Whether you're an individual seeking a studio apartment or a family or group reunion requiring a three-bedroom space, we have a variety of options to meet your needs."
              }
            />

            <FAQAccordion
              heading={"Is there easy to access parking?"}
              content={
                "Parking for all of our Surrey accommodation is located on-site making the transition of taking your bags from the car indoors nice and simple."
              }
            />

            <FAQAccordion
              heading={"What are the check-in and check-out times?"}
              content={
                "Standard check-in time is 4:00 pm, and check-out is at 10:00 am. However, if you require extended time, feel free to put in a request and we'll do our utmost to accommodate your needs."
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

export default HolidayLets;
