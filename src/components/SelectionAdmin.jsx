import React from "react"
import NavbarAdmin from "./NavbarAdmin"
import Climbing from "../images/climbing.svg"
import Skateboard from "../images/skateboard.svg"
import Surf from "../images/surf.svg"
import ContentcontainerAdmin from "./ContentcontainerAdmin"
import { Link } from "react-router-dom"

export default function SelectionAdmin() {
   return (
      <div>
         <NavbarAdmin />
         <div id="carousellContainer">
            <div className="carousel slide" data-bs-ride="carousel" id="carousel-2">
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <img className="w-100 d-block" src={Climbing} height={40} alt="Slide Image 1" />
                  </div>
                  <div className="carousel-item">
                     <img className="w-100 d-block" src={Skateboard} height={40} alt="Slide Image 2" />
                  </div>
                  <div clclassNameass="carousel-item">
                     <img className="w-100 d-block" src={Surf} height={40} alt="Slide Image 3" />
                  </div>
               </div>
               <div>
                  <a className="carousel-control-prev" href="#carousel-2" role="button" data-bs-slide="prev">
                     <span className="carousel-control-prev-icon" id="spanArrow"></span>
                     <span className="visually-hidden">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carousel-2" role="button" data-bs-slide="next">
                     <span className="carousel-control-next-icon" id="spanArrow"></span>
                     <span className="visually-hidden">Next</span>
                  </a>
               </div>
               <ol className="carousel-indicators">
                  <li data-bs-target="#carousel-2" data-bs-slide-to="0" className="active"></li>
                  <li data-bs-target="#carousel-2" data-bs-slide-to="1"></li>
                  <li data-bs-target="#carousel-2" data-bs-slide-to="2"></li>
               </ol>
            </div>
         </div>
         <div id="selectionContainer1">
            <form className="form-inline">
               <div className="form-group">
                  <label>SELECT SPORT</label>
                  <select className="form-control">
                     <option>SELECT</option>
                     <option>Skateboarding</option>
                     <option>Snowboarding</option>
                     <option>Surfing</option>
                     <option>Climbing</option>
                     <option>BMX</option>
                  </select>
               </div>
            </form>
         </div>
         <div id="selectionContainer2">
            <form className="form-inline">
               <div className="form-group">
                  <label>SELECT INJURY TYPE</label>
                  <select className="form-control">
                     <option>SELECT</option>
                     <option>SPRAIN</option>
                     <option>BREAK</option>
                     <option>TEAR</option>
                  </select>
               </div>
            </form>
         </div>
         <div id="selectionContainer">
            <Link to="/ContentcontainerAdmin" as={Link} element={ContentcontainerAdmin}>
               <button className="btn btn-primary" id="fixMeButton" type="button">
                  FIX ME
               </button>
            </Link>
         </div>
      </div>
   )
}
