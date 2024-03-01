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
    text: LetsData["relocation-breaks"].usp[0],
  },
  {
    image: Bistro,
    text: LetsData["relocation-breaks"].usp[1],
  },
  {
    image: Bedroom,
    text: LetsData["relocation-breaks"].usp[2],
  },
];

const RelocationBreaks = () => {
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
            <h3 className="heading">Relocation Breaks in Surrey</h3>
            <div className="content">
              <p>{LetsData["relocation-breaks"].header}</p>
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
              <p>{LetsData["relocation-breaks"].location}</p>
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
              <p>{LetsData["relocation-breaks"].staylets}</p>
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
              <p>{LetsData["relocation-breaks"].works}</p>
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
              heading={"Can I bring pets into the property?"}
              content={
                <>In general we do not allow pets, but please contact us directly on <a href="mailto:ask@staylets.co.uk">ask@staylets.co.uk</a> to discuss the options, as we try to be as flexible as possible.</>
              }
            />

            <FAQAccordion
              heading={"Are there restrictions on the duration of our stay?"}
              content={
                "At StayLets, we offer flexible options ranging from one-night stays to year-long accommodations, subject to availability on your chosen property. Additionally, extended stays come with the added benefit of a discount."
              }
            />

            <FAQAccordion
              heading={"Can I modify the dates of the stay?"}
              content={
                "We understand the uncertainties associated with house moves, and that’s why we recognise that changes may be necessary due to administrative reasons or personal timelines. If you wish to alter your booking, such as extending your stay, we will make every effort to accommodate your request. However, we cannot guarantee availability every time. Please consult with a member of our team to discuss how we can assist with your request."
              }
            />

            <FAQAccordion
              heading={
                "What if there is accidental damage to the accommodation?"
              }
              content={
                "For extended stays, we acknowledge that incidents may occur, whether to bathroom fixtures, furniture, or kitchen appliances. Guests are responsible for the property and its contents. In case of any damages, prompt reporting is essential, and the cost of repair or replacement must be mutually agreed upon with StayLets."
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

export default RelocationBreaks;
