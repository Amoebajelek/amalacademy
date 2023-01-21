import Navigation from "../../Components/Navigation"
import Bootcamps from "./Bootcamps"
import Categories from "./Categories"
import Classes from "./Classes"
import Header from "./Header"
import Testimonial from "./Testimonial"
import Values from "./Values"

const Homepage = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Bootcamps />
      <Categories />
      <Classes />
      <Values />
      <Testimonial />
    </div>
  )
}

export default Homepage