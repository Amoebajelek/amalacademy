import logoFigma from '../Assets/logo-figma.png'
import logoGithub from '../Assets/logo-github.png'
import logoJavascript from '../Assets/logo-javascript.png'
import logoNodejs from '../Assets/logo-nodejs.png'
import logoMongodb from '../Assets/logo-mongodb.png'

const Card = () => {
  return (
    <div className="card">
      <img src="https://picsum.photos/300/200" className="card-img-top mx-auto my-3" alt="card-img-top" />
      <div className="card-body ms-3">
        <h5 className="card-title">Berkarir sebagai Full-Stack Javascript Developer</h5>
        <p className="card-text text-secondary">12 courses • 34 hours</p>
        <hr />
        <nav>
          <img src={logoFigma} className='logo-tech' alt='logo-tech' />
          <img src={logoGithub} className='logo-tech ms-3' alt='logo-tech' />
          <img src={logoJavascript} className='logo-tech ms-3' alt='logo-tech' />
          <img src={logoNodejs} className='logo-tech ms-3' alt='logo-tech' />
          <img src={logoMongodb} className='logo-tech ms-3' alt='logo-tech' />
        </nav>
      </div>
    </div>
  )
}

export default Card