import React from "react"
import ContactUser from "./ContactUser"
import ContentListUser from "./ContentListUser"
import FavoritesUser from "./FavoritesUser"
import IndexUser from "./IndexUser"
import Login from "./Login"
import LogoutUser from "./LogoutUser"
import ThemeUser from "./ThemeUser"
import SportFilter from "./SportFilter"
import InjuryFilter from "./InjuryFilter"
import BackAarow from "../images/BackArrow.svg"
import SoarLogo from "../images/SoarLogo.svg"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"

export default function NavbarUser() {
   return (
      <div>
         <nav className="navbar navbar-light navbar-expand-lg navigation-clean" id="soarNavBar">
            <div className="container">
               <img id="backArrow" src={BackAarow} height={30} />

               <img id="soarLogo" src={SoarLogo} height={30} />

               <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
                  <span className="visually-hidden">Toggle navigation</span>
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navcol-1">
                  <ul className="navbar-nav">
                     <Link className="nav-link text-center" as={Link} to="/IndexUser" element={IndexUser}>
                        Home
                     </Link>

                     <Link className="nav-link text-center" as={Link} to="/SportFilter" element={SportFilter}>
                        Sport Filter
                     </Link>

                     <Link className="nav-link text-center" as={Link} to="/InjuryFilter" element={InjuryFilter}>
                        Injury Filter
                     </Link>

                     <Link className="nav-link text-center" as={Link} to="/ContentListUser" element={ContentListUser}>
                        Content
                     </Link>

                     <Link className="nav-link text-center" as={Link} to="/FavoritesUser" element={FavoritesUser}>
                        Favorites
                     </Link>

                     <Link className="nav-link text-center" as={Link} to="/ContactUser" element={ContactUser}>
                        Contact User
                     </Link>

                     <Link className="nav-link text-center" as={Link} to="/ThemeUser" element={ThemeUser}>
                        Theme Settings
                     </Link>

                     <Link className="nav-link text-center" as={Link} to="/LogoutUser" element={LogoutUser}>
                        Logout
                     </Link>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   )
}

{
   /* <Router>
  <nav
    className="navbar navbar-light navbar-expand-lg navigation-clean"
    id="soarNavBar"
  >
    <div className="container">
      <a href="index.html">
        <img id="backArrow" src="../assets/img/back_arrow.svg" />
      </a>
      <a href="index.html">
        <img id="navbarLogo" src="../assets/img/logo_final.svg" />
      </a>
      <button
        data-bs-toggle="collapse"
        className="navbar-toggler"
        data-bs-target="#navcol-1"
      >
        <span className="visually-hidden">Toggle navigation</span>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navcol-1">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" id="favorites" href="favorites.html">
              Favorites
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="contact" href="contact.html">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="logout" href="logout.html">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/catprofile/:id" element={<CatProfile />} />
    <Route path="/addaward" element={<AddAward />} />
    <Route path="/shows" element={<Shows />} />
    <Route path="/show/:id" element={<Show />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
</Router>; */
}
