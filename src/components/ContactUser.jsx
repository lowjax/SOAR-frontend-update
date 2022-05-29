import React from "react"
import NavbarUser from "./NavbarUser"
import FontAwesome from "react-fontawesome"
import {MdEmail} from "react-icons/md"
import {AiFillMessage} from "react-icons/ai"
import {AiFillStar} from "react-icons/ai"

export default function ContactUser() {
   return (
      <div>
         <NavbarUser />
         <div>
            <section className="contact-clean">
               <form method="post">
                  <h2 className="text-center">Contact Us</h2>
                  <div className="mb-3">
                     <AiFillStar/>
                     <input className="form-control" type="text" placeholder="Subject" />
                  </div>
                  <div className="mb-3">
                  <MdEmail/>
                     <input className="form-control is-invalid" type="email" name="email" placeholder="Email" />
                     <small className="form-text text-danger">Please enter a correct email address.</small>
                  </div>
                  <div className="mb-3">
                     <AiFillMessage/>
                     <textarea className="form-control" name="message" placeholder="Message" rows="14"></textarea>
                  </div>
                  <div id="buttonDiv" className="mb-3">
                     <button className="btn btn-primary" id="submitButton" type="submit">
                        send{" "}
                     </button>
                  </div>
               </form>
            </section>
         </div>
      </div>
   )
}
