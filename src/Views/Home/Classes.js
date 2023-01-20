import CardClass from "../../Components/Card-Class"

const Classes = () => {
  return (
    <section id="Classes">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <p className="purple-color">Start Learning Today</p>
            <h3>Choose Featured Class <br />
              to Increase Expertise</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 mt-5">
            <CardClass title='Full-Stack Laravel React Js: Building Streaming Music Web' sprice='Rp. 329,000' dprice='Rp. 29,000' />
          </div>
          <div className="col-lg-4 mt-5">
            <CardClass title='Full-Stack Laravel React Js: Building Streaming Music Web' sprice='Rp. 329,000' dprice='Rp. 29,000' />
          </div>
          <div className="col-lg-4 mt-5">
            <CardClass title='Full-Stack Laravel React Js: Building Streaming Music Web' sprice='Rp. 329,000' dprice='Rp. 29,000' />
          </div>
          {/* <div className="col-lg-4 mt-5">
            <CardClass title='Berkarir sebagai Freelancer Mobile Application Developer' qcourse='9' qtime='24' />
          </div>
          <div className="col-lg-4 mt-5">
            <CardClass title='Berkarir sebagai Freelancer IOS Developer' qcourse='9' qtime='24' />
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Classes