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
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${MagnaHouse.src})`,
        }}
      >
        <Filter />
      </section>

      <section className="inner-page">
        <div className="container">
          <div className="selling-points-section">
            <h3 className="heading">Short Term Lets in Surrey</h3>
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
              heading={"What is the cancellation policy?"}
              content={
                "If you need to cancel your stay before the arrival date, we kindly ask that you notify us via email. For stays under 6 nights, we require a 48-hour notice for a full refund. However, if you cancel within less than 48 hours of the scheduled arrival, the full cost of your stay will be incurred."
              }
            />

            <FAQAccordion
              heading={"Can I host an event in the accommodation?"}
              content={
                "While we wish you a pleasant and enjoyable stay, hosting gatherings and parties is strictly prohibited. If we discover that such an event is taking place, we will kindly request your immediate departure without the option of relocation. Our goal is to maintain a peaceful environment for all guests and to ensure that our accommodation is treated with respect."
              }
            />

            <FAQAccordion
              heading={"Is there a charge for internet access?"}
              content={
                "Our Wi-Fi service is complimentary in all our accommodations. In the event of a connection loss, we will make every effort to restore it promptly. However, please note that we cannot be held responsible for any interruptions in the internet connection."
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

export default ShortTermLets;
