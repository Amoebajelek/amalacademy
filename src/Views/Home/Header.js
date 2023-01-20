import IcCat1 from '../../Assets/ic-category-1.png'
import IcCat2 from '../../Assets/ic-category-2.png'
import IcCat3 from '../../Assets/ic-category-3.png'
import IcCat4 from '../../Assets/ic-category-4.png'
import IcCat5 from '../../Assets/ic-category-5.png'
import IcCat6 from '../../Assets/ic-category-6.png'

const Header = () => {
  return (
    <section id="Header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center my-auto">
            <h1 className="title">Learn Anything to <span className='purple-color'>Improve</span> <br />
              Your Skills and <span className='purple-color'>Earn</span> from It all</h1>
            <p className="subtitle">Amal Academy is an online learning site that provider tens of thousands of classes with experienced instructors.</p>
            <a href="/#"><p>Find The Products You Need</p></a>
          </div>
        </div>

        <section id="categories">
          <div className="container">
            <section className="section-categories row justify-content-center" id="stats">
              <div className="col-2 categories-detail text-center">
                <img src={IcCat1} className='icon-category' alt='icon-category' />
                <p>Front-end Development</p>
              </div>
              <div className="col-2 categories-detail text-center">
                <img src={IcCat2} className='icon-category' alt='icon-category' />
                <p>Back-end Development</p>
              </div>
              <div className="col-2 categories-detail text-center">
                <img src={IcCat3} className='icon-category' alt='icon-category' />
                <p>Mobile App Development</p>
              </div>
              <div className="col-2 categories-detail text-center">
                <img src={IcCat4} className='icon-category' alt='icon-category' />
                <p>Graphic Design</p>
              </div>
              <div className="col-2 categories-detail text-center">
                <img src={IcCat6} className='icon-category' alt='icon-category' />
                <p>Soft Skills</p>
              </div>
              <div className="col-2 categories-detail text-center">
                <img src={IcCat5} className='icon-category' alt='icon-category' />
                <p>Browse all ...</p>
              </div>
            </section>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Header