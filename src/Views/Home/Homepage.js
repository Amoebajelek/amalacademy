import Navigation from "../../Components/Navigation"
import Bootcamps from "./Bootcamps"
import Categories from "./Categories"
import Header from "./Header"

const Homepage = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Bootcamps />
      <Categories />
    </div>
  )
}

export default Homepage