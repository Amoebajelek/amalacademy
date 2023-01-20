import Card from "../../Components/Card"

const Bootcamps = () => {
  return (
    <section id="Bootcamps">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <p className="purple-color">Build with Professional</p>
            <h3>Best Learning Flow <br /> to Build a Career</h3>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-4 mt-5">
            <Card title='Berkarir sebagai Full-Stack Javascript Developer' qcourse='12' qtime='34' />
          </div>
          <div className="col-lg-4 mt-5">
            <Card title='Berkarir sebagai Freelancer Mobile Application Developer' qcourse='17' qtime='52' />
          </div>
          <div className="col-lg-4 mt-5">
            <Card title='Berkarir sebagai Freelancer IOS Developer' qcourse='19' qtime='41' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bootcamps