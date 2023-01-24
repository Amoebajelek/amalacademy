import logo from '../Assets/logotext.png'
import linkFacebook from '../Assets/link-facebook.png'
import linkLinkedIn from '../Assets/link-linkedin.png'
import linkTwitter from '../Assets/link-twitter.png'
import linkInstagram from '../Assets/link-instagram.png'
import LinkList from './List-Links'

const Footer = () => {
  return (
    <section id='Footer'>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5">
            <img src={logo} className="logo" alt="logo" />
            <p className='mt-3 mb-5'>Platform Edukasi untuk generasi muda yang akan mengantarkan anak anak muda dari Dunia pendidikan untuk Ready dan siap terhadap industri atau dunia kerja.</p>
            <a href='/#' className='link-social-media'>
              <img src={linkFacebook} alt='logo-social-media' />
            </a>
            <a href='/#' className='link-social-media'>
              <img src={linkLinkedIn} alt='logo-social-media' />
            </a>
            <a href='/#' className='link-social-media'>
              <img src={linkTwitter} alt='logo-social-media' />
            </a>
            <a href='/#' className='link-social-media'>
              <img src={linkInstagram} alt='logo-social-media' />
            </a>
          </div>
          <div className="col-lg-8 links">
            <div className='row my-1'>
              <LinkList title='Start Your Carrer' link1='UI Designer' link2='UX Designer' link3='Website Developer' link4='React Js Developer' link5='Flutter Developer' />
              <LinkList title='Resources' link1='Handbook' link2='Digibook' link3='Pixel Assets' link4='Website Builder' />
              <LinkList title='Mastering New Tools' link1='Figma' link2='Blender' link3='Vue Js' link4='Adobe XD' link5='React Js' />
              <LinkList title='Learning Language' link1='PHP' link2='Javascript' link3='Dart' link4='Kotlin' link5='React Js' />
            </div>
            <div className='row my-1'>
              <LinkList title='Products' link1='Tips' link2='Online Course' link3='Website Builder' link4='Design Resources' link5='Dashboard Kit HTML' />
              <LinkList title='Community' link1='Showcase' link2='Testimonial' link3='Mentor' link4='Webinar' />
              <LinkList title='Company' link1='About' link2='Our Timeline' link3='Contact' link4='Carrers' link5='Instagram' link6='Tiktok' />
              <LinkList title='Office' link1='Bandung, West Java' link2='Indonesia' link3='0822-1111-8888' link4='Kotlin' link5='team@amalacademy.co' />
            </div>
            <div className='row my-1'>
              <LinkList title='Explore' link1='Find Class' link2='Roadmap Learning' link3='All Courses' link4='Check Certification' />
              <LinkList title='Useful Links' link1='Privacy & Policy' link2='Terms & Conditions' link3='Operational Time' />
              <LinkList title='Language' link1='Engish (US)' link2='Bahasa Indonesia' />
            </div>
          </div>
        </div>
      </div>
      <footer className='py-3 text-center text-light'>Copyright © 2022 Amal Academy. All rights reserved</footer>
    </section>
  )
}

export default Footer