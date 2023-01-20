import logoGeneral from '../../Assets/logo-general.png'

const Categories = () => {
  return (
    <section id="Categories">
      <div className="container">
        <div className="row">
          <div className="col text-center text-white">
            <p >Choose Your Focus</p>
            <h3>Top Category We Have</h3>
          </div>
        </div>
        
        <div className="row justify-content-around">
          <div className="col-lg-4 col-sm-12 list-categories bg-white mt-5">
            <div className='row mx-auto my-auto'>
              <div className='col-2'>
              <img src={logoGeneral} className='logo-general' alt='logo-general' />
              </div>
              <div className='col-10'>
                <h4>Front-End Development</h4>
                <p className='text-secondary'>32 Courses</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 list-categories bg-white mt-5">
            <div className='row mx-auto my-auto'>
              <div className='col-2'>
              <img src={logoGeneral} className='logo-general' alt='logo-general' />
              </div>
              <div className='col-10'>
                <h4>Back-End Development</h4>
                <p className='text-secondary'>40 Courses</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 list-categories bg-white mt-5">
            <div className='row mx-auto my-auto'>
              <div className='col-2'>
              <img src={logoGeneral} className='logo-general' alt='logo-general' />
              </div>
              <div className='col-10'>
                <h4>Mobile App Development</h4>
                <p className='text-secondary'>29 Courses</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-around">
          <div className="col-lg-4 col-sm-12 list-categories bg-white mt-5">
            <div className='row mx-auto my-auto'>
              <div className='col-2'>
              <img src={logoGeneral} className='logo-general' alt='logo-general' />
              </div>
              <div className='col-10'>
                <h4>Personal Development</h4>
                <p className='text-secondary'>32 Courses</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 list-categories bg-white mt-5">
            <div className='row mx-auto my-auto'>
              <div className='col-2'>
              <img src={logoGeneral} className='logo-general' alt='logo-general' />
              </div>
              <div className='col-10'>
                <h4>Cyber Security</h4>
                <p className='text-secondary'>40 Courses</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 list-categories bg-white mt-5">
            <div className='row mx-auto my-auto'>
              <div className='col-2'>
              <img src={logoGeneral} className='logo-general' alt='logo-general' />
              </div>
              <div className='col-10'>
                <h4>Graphic Design</h4>
                <p className='text-secondary'>29 Courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories