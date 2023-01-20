import Logo from '../Assets/logo.png'

const Navigation = () => {
  return (
    <section id='Navigation'>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand ms-3" href="/#">
            <img src={Logo} className='logo-brand' alt='logo-brand' />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/#">Flash Sale</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Bootcamps</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Classes
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/#">Action</a></li>
                  <li><a className="dropdown-item" href="/#">Another action</a></li>
                  {/* <li><hr className="dropdown-divider"></li> */}
                  <hr />
                  <li><a className="dropdown-item" href="/#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Recources
                </a>
                <ul className="dropdown-menu">
                  <li><a className='dropdown-item' href="/#">Action</a></li>
                  <li><a className='dropdown-item' href="/#">Another action</a></li>
                  {/* <li><hr className='dropdown-divi'er"></li> */}
                  <hr />
                  <li><a className='dropdown-item' href="/#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            
            {/* Mobile button */}
            <form className="form-inline d-sm-block d-md-none">
              <button className="btn btn-navbar-right my-2 my-sm-0">
                Login / Register
              </button>
            </form>

            {/* Desktop Button */}
            <form className="form-inline my-2 my-lg-0 d-none d-md-block ms-auto">
              <button className="btn btn-navbar-right my-2 my-sm-0 px-4">
              Login / Register
              </button>
            </form>

          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navigation