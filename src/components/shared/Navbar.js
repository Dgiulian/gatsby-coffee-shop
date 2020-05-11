import React from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"

const links = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
]

export default function Navbar() {
  const [navOpen, setNavOpen] = React.useState(false)
  const navbarHandler = () => {
    setNavOpen(navOpen => !navOpen)
  }
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Latte larry's logo" />
        {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/webalys */}
      </Link>
      <button className="navbar-toggler" type="button" onClick={navbarHandler}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={
          navOpen ? "collapse navbar-collapse" : "collapse navbar-collapse show"
        }
      >
        <ul className="navbar-nav mx-auto">
          {links.map(link => (
            <li key={link.id} className="nav-item">
              <Link to={link.path} className="nav-link text-capitalize">
                {link.text}
              </Link>
            </li>
          ))}
          <li className="nav-link  ml-sm-5">
            <FaCartArrowDown className="cart-icon snipcart-checkout" />
          </li>
        </ul>
      </div>
    </nav>
  )
}
