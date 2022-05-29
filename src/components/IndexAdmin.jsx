import React from "react"
import NavbarAdmin from "./NavbarAdmin"
import BodyDiagram from "../images/BodyDiagram.svg"
import { useState, useEffect } from "react"
import { useFormik } from "formik"

// const [userStatus, setUserStatus] = useState("")
// // useEffect(() => {

// const email = localStorage.getItem("email")
// console.log(email)

//   fetch(`http://localhost:1235/api/users/${email}`)
//   .then((response) => response.json())
//   .then(data => {
//     console.log(data)
//     // const user_status = data.user_status
//     setUserStatus(data.user_status)
//     localStorage.setItem("user_status", user_status)
//   })

// // } , [email])

export default function IndexAdmin() {
   // console.log(userStatus)

   let userAuthentication = localStorage.getItem("user_status")

   console.log(userAuthentication)

   if (userAuthentication === "admin") {
      return (
         <div>
            <NavbarAdmin />
            <div id="bodyDigramContainer">
               <img id="bodyDiagram" src={BodyDiagram} height={40} />
            </div>
            <div id="bodDiagramText">
               <h1>Select area of injury</h1>
            </div>
         </div>
      )
   }

   // fetch("http://localhost:1235/api/body")
}
