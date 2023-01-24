import AccordionFAQs from "../../Components/AccordionFAQs"

const FAQs = () => {
  return (
    <section id="FAQs">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <p className="purple-color">Nice To Meet You</p>
            <h3>Frequently Asked<br />
              Questions</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-12 mt-5">
            <AccordionFAQs />
          </div>

          <div className="col-lg-6 col-sm-12 mt-5">
            <AccordionFAQs />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQs