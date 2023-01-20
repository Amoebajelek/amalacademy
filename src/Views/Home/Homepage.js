import Navigation from "../../Components/Navigation"
import Bootcamps from "./Bootcamps"
import Categories from "./Categories"
import Classes from "./Classes"
import Header from "./Header"
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
    </div>
  )
}

export default Homepage