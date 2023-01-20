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
        <div className="row">
          <div className="col-lg-4 mt-5">
            <Card />
          </div>
          <div className="col-lg-4 mt-5">
            <Card />
          </div>
          <div className="col-lg-4 mt-5">
            <Card />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bootcamps