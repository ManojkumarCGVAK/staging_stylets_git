import React from "react";
import FAQAccordion from "../accordion";
import Link from "next/link";

const Faq = () => {
  return (
    <div className="landing-page">
      <section className="inner-page">
        <div className="container">
          <div className="selling-points-section">
            <h3 className="heading">FAQ</h3>
          </div>
          <FAQAccordion
            heading={"Is there a limit on how long I can stay?"}
            content={
              <>
                Whether you want to stay for a few weeks or a whole year, as
                long as the property is available, you have first-choice
                priority on the accommodation. Simply select the dates you would
                like the stay on our website. Alternatively, you can email{" "}
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
                In general we do not allow pets, but please contact us directly
                on <a href="mailto:ask@staylets.co.uk">ask@staylets.co.uk</a> to
                discuss the options, as we try to be as flexible as possible.
              </>
            }
          />

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

          <FAQAccordion
            heading={"Is there a set duration I can stay?"}
            content={
              "At StayLets we understand that some business tasks can take longer than a few days, with some projects lasting weeks or even months. That’s why we offer our accommodation for extended lengths of time or even up to a year and beyond and are pleased to offer a discount on these longer stays. "
            }
          />

          <FAQAccordion
            heading={"What size accommodation do you have available?"}
            content={
              "At StayLets we are pleased to offer a wide variety of options for your stay based on your party size. From studio apartments great for individuals or five five-bedroom accommodation options which are perfect for families or friend reunions, there’s plenty on offer to suit."
            }
          />

          <FAQAccordion
            heading={"Is there parking included?"}
            content={
              "All parking for our Spa Court accommodation is on-street, or at local public car parks."
            }
          />

          <FAQAccordion
            heading={"Is there easy to access parking?"}
            content={
              "Parking for all of our Surrey accommodation is located on-site making the transition of taking your bags from the car indoors nice and simple."
            }
          />

          <Link href="/accommodation">
            <a className="btn btn-secondary">Book Now</a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Faq;
