import Navigation from "../../Components/Navigation"
import Bootcamps from "./Bootcamps"
import Categories from "./Categories"
import Classes from "./Classes"
import Header from "./Header"

const Homepage = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Bootcamps />
      <Categories />
      <Classes />
    </div>
  )
}

export default Homepage