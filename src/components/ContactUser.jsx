import React from "react"
import NavbarUser from "./NavbarUser"
import FontAwesome from "react-fontawesome"
import {MdEmail} from "react-icons/md"
import {AiFillMessage} from "react-icons/ai"
import {AiFillStar} from "react-icons/ai"
import { useState, useEffect } from "react"


export default function send() {
   // const [email, setEmail] = useState("")
   // const [subject, setSubject] = useState("")
   // const [message, setMesage] = useState("")



   // const onChangeSubject = (e) => {
   //    const subject = e.target.value;
   //    setSubject(subject)
   // }
   // const onChangeMessage = (e) => {
   //    const message = e.target.value;
   //    setMessage(message)
   // }


   // const onChangeEmail = (e) => {
   //    const email = e.target.value;
   //    setEmail(email);
   // }



   return (
      <div>
         <NavbarUser />
         <div>
            <section className="contact-clean">
               <form >
                  <h2 className="text-center">Contact Us</h2>
                  <div className="mb-3">
                     <AiFillStar/>
                     <input className="form-control" 
                     type="text " 
                     pattern="[A-Za-z0-9\-_\.\@]{4,20}" title="email must have a subject" minlength="5"
                     // onChange={onChangeSubject}
                     onSubmit={send}
                     placeholder="Subject" />
                  </div>
                  <div className="mb-3">
                  <MdEmail/>
                     <input className="form-control is-invalid" 
                     type="email" name="email" 
                     pattern="[A-Za-z0-9\-_\.\@]{4,20}" title="Four or more characters"
                     // onChange={onChangeEmail}
                     onSubmit={send}
                     placeholder="Email" />
                     
                     {/* <small className="form-text text-danger">Please enter a correct email address.</small> */}
                  </div>
                  <div className="mb-3">
                     <AiFillMessage/>
                     <textarea className="form-control" 
                     name="message" 
                     placeholder="Message" 
                     pattern="[A-Za-z0-9\-_\.\@]{4,20}" title="message must not be empty" minlength="5"
                     // onChange={onChangeMessage}
                     onSubmit={send}

                     rows="14"></textarea>
                  </div>
                  <div id="buttonDiv" className="mb-3">
                     <button className="btn btn-primary" 
                     id="submitButton" 
                     type="">
                        send{" "}
                     </button>
                  </div>
               </form>
            </section>
         </div>
      </div>
   )
}
