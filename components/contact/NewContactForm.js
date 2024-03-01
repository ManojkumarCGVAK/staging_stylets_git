import ContactForm from "./ContactForm";


const NewContactForm = () => {
  return (
    <div className="container">
      <div id="landing-contact" className="landing-contact">
        <div className="landing-contact__left">
          <div className="landing-contact__left--content">
            <h3>Book Your Ideal Accommodation</h3>
            <p>
              We would love to hear from you if we can be of any assistance with
              your business or corporate accommodation needs. We are firm
              believers in the fact loyalty should be acknowledged and rewarded,
              which keeps our guests coming back time and again. We also offer
              direct booking perks and discounts, as well as reduced rates for
              extended stays. So why not get in touch today.
            </p>
          </div>
        </div>
        <div className="landing-contact__right">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default NewContactForm