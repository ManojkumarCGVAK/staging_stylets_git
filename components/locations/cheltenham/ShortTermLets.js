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
    text: LetsData["short-term-lets"].usp[0],
  },
  {
    image: Bistro,
    text: LetsData["short-term-lets"].usp[1],
  },
  {
    image: Bedroom,
    text: LetsData["short-term-lets"].usp[2],
  },
];

const ShortTermLets = () => {
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
            <h3 className="heading">Short Term Lets in Cheltenham</h3>
            <div className="content">
              <p>{LetsData["short-term-lets"].header}</p>
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
              <p>{LetsData["short-term-lets"].location}</p>
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
              <p>{LetsData["short-term-lets"].staylets}</p>
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
              <p>{LetsData["short-term-lets"].works}</p>
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
              heading={"Can I host a party in the accommodation?"}
              content={
                "Although we hope that you have a pleasant and fun time in the accommodation, gatherings and parties are forbidden and if we do discover that you are hosting an event then we will ask you to leave immediately without being relocated elsewhere. We wouldn’t want to upset the neighbours and would hope that you treat our accommodation with respect. "
              }
            />

            <FAQAccordion
              heading={"Is there are charge for the internet?"}
              content={
                "Our Wi-Fi is available free of charge in all of our accommodation, but if a connection is lost we will do our best to get a connection back as soon as possible. However, we cannot be held liable for loss of connection. "
              }
            />

            <FAQAccordion
              heading={"What happens if I need to cancel?"}
              content={
                "If you do need to cancel your stay before the arrival dates then we request that this is done so via email. For stays under 6 nights, we’ll need to have 48 hours’ notice of the cancellation in order to issue a full refund. However, if you do cancel at any time less than 48 hours then the full cost of your stay will still be taken."
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

export default ShortTermLets;
