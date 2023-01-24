import CardTestimonial from "../../Components/Card-Testimonial"
import ImgProfile1 from '../../Assets/img-profile-1.png'
import ImgProfile2 from '../../Assets/img-profile-2.png'
import ImgProfile3 from '../../Assets/img-profile-3.png'

const Testimonial = () => {
  return (
    <section id="Testimonial">
      <div className="container">
        <div className="row">
          <div className="col text-center text-white">
            <p>Trusted By 900K+ Students</p>
            <h3>Join Our Supportive  <br />
              Community</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 mt-5">
            <CardTestimonial
              image={ImgProfile1}
              title='Alur Belajar Jelas'
              testimonial='Terbaik! Kelasnya mendukung banget untuk kemajuan ilmu UI/UX Design'
              name='Michael'
              occupation='Front-End Web Developer'
            />
          </div>
          <div className="col-lg-4 mt-5">
            <CardTestimonial
              image={ImgProfile2}
              title='Hemat Waktu'
              testimonial='Terima kasih telah membuat materi kelas yang singkat, padat dan jelas.'
              name='Margaret'
              occupation='UI/UX Designer'
            />
          </div>
          <div className="col-lg-4 mt-5">
            <CardTestimonial
              image={ImgProfile3}
              title='High Quality'
              testimonial='Ilmunya daging semua. Materi yang diberikan lebih dari ilmu basic'
              name='Carla'
              occupation='Flutter Developer'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial