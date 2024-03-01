import React from "react";
import Link from "next/link";

import Filter from "../../landing/Filter";
import Gallery from "../../property/Gallery";
import SellingPoints from "../../elements/SellingPoints";
import NewContactForm from "../../contact/NewContactForm";
import FAQAccordion from "../../accordion";

// Images
import SpaCourt from "../../../images/buildings/spa-court.jpg";import Bistro from "../../../images/bistro.jpg";
import Bedroom from "../../../images/buildings/bedroom.jpg";
import Lounge from "../../../images/buildings/property.jpg";

import LetsData from "./data.json";
import { imageArray } from "./images";

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
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${SpaCourt.src})`,
        }}
      >
        <Filter />
      </section>

      <section className="inner-page">
        <div className="container">
          <div className="selling-points-section">
            <h3 className="heading">Relocation Breaks in Cheltenham</h3>
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
              heading={"Is there a limit on how long we can stay?"}
              content={
                "At StayLets we provide options for 1-night stays or stays for a whole year, if there is availability on your desired property. We also provide the benefit of a discount on extended stays so make sure to enquire about this."
              }
            />

            <FAQAccordion
              heading={"Can I bring pets into the property?"}
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
              heading={
                "What happens if there is accidental damage to the accommodation?"
              }
              content={
                "With all longer stays we understand that incidents can occur, whether that’s to the furniture, bathroom or kitchen appliances. You are responsible for taking care of the property and its contents, therefore, any damages must be reported as soon as possible and the cost of repair or replacement must be agreed with StayLets."
              }
            />

            <FAQAccordion
              heading={"Can I alter the dates of the stay?"}
              content={
                "With house moves, we understand that things are changeable due to administration or your timelines. If you do want to change your booking, for example, extend your stay, then we will do our utmost to comply with the request but cannot guarantee that we will be able to accommodate you every time. Speak to a member of our team to see how we can assist with your request."
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

export default RelocationBreaks;
