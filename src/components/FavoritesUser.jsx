import React from "react"
import NavbarUser from "./NavbarUser"
import PhysioContent from "../images/PhysioContent.jpg"

export default function FavoritesUser() {
   return (
      <div>
         <NavbarUser />
         <div id="contentContainer">
            <div className="card-group">
               <div className="card">
                  <div className="card-body" id="contentCard">
                     <img id="physioImage" src={PhysioContent} height={40} />
                     <h4 className="card-title">Routine 1</h4>
                     <p className="card-text">
                        Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Donec id elit non mi porta gravida at eget metus.
                     </p>
                     <button className="btn btn-primary" id="favoritesButton" type="button">
                        DELETE
                     </button>
                  </div>
                  <div className="card-body" id="contentCard">
                     <img id="physioImage" src={PhysioContent} height={40} />
                     <h4 className="card-title">Routine 2</h4>
                     <p className="card-text">
                        Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Donec id elit non mi porta gravida at eget metus.
                     </p>
                     <button className="btn btn-primary" id="favoritesButton" type="button">
                        DELETE
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
