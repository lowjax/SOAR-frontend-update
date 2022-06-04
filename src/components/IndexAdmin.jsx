import React from "react"
import NavbarAdmin from "./NavbarAdmin"
import BodyDiagram from "../images/BodyDiagram.svg"
import { useState, useEffect } from "react"
import { useFormik } from "formik"
import { Spinner } from "react-bootstrap"
import SelectionAdmin from "./SelectionAdmin"

// const [userStatus, setUserStatus] = useState("")
// // useEffect(() => {

// const email = localStorage.getItem("email")
// console.log(email)

//   fetch(`https://soar-backend.herokuapp.com/api/users/${email}`)
//   .then((response) => response.json())
//   .then(data => {
//     console.log(data)
//     // const user_status = data.user_status
//     setUserStatus(data.user_status)
//     localStorage.setItem("user_status", user_status)
//   })

// // } , [email])

export default function IndexAdmin() {
   const [openModal, setOpenModal] = React.useState(false)
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)
   const [bodyPart, setBodyPart] = useState("")

   let formik = useFormik({
      initialValues: {
         bodyPart: "",
      },
      // validationSchema: validateFields,
      // onSubmit: (values) => {
      //   alert("form submitted");
      // },
   })

   function bodySelect() {
      var myHeaders = new Headers()
      myHeaders.append("Content-Type", "application/json")

      var requestOptions = {
         // method: 'GET',
         // headers: myHeaders,
         // body: urlencoded,
         // redirect: 'follow'
         credentials: "include",
      }
      fetch("https://soar-backend.herokuapp.com/api/body", requestOptions)
         .then((response) => {
            console.log(response)
            console.log(formik.values.bodyPart)
            if (response.status == 200) {
               // console.log(bodyPart);

               alert("Success! have selected a body part.")
               setOpenModal(true)
               setBodyPart(response)
               console.log(bodyPart)
               // window.location.href = "SelectionUser";
               return
            }
         })
         .then((data) => {
            // JSON.response
            console.log(data)
         })
         .catch((e) => {
            // console.log(response)
            console.log(e)
            alert("Sorry, something isn't right")
            //return;
         })
         .finally(() => {
            setLoading(true)
         })
   }
   //
   useEffect(() => {}, [])

   console.log(formik.values.bodyPart)
   return (
      <>
         {!openModal && (
            <div>
               <NavbarAdmin />
               {loading && <Spinner animation="border" />}
               {error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
               <div id="bodyDigramContainer">
                  <img id="bodyDiagram" src={BodyDiagram} height={40} />
               </div>
               <div id="bodDiagramText">
                  <h1>Select area of injury</h1>
               </div>
               <form className="form-inline">
                  <select
                     className="form-control"
                     name="bodyPart"
                     onChange={formik.handleChange}
                     value={formik.values.bodyPart}
                     onBlur={formik.handleBlur}>
                     <option value= "">SELECT BODY PART</option>
                     <option value="Right Ankle">Right ankle </option>
                     <option value="Left Ankle">Left ankle</option>
                     <option value="Head">Head</option>
                  </select>
               </form>
               <br />
               <div id="selectionContainer">
                  <button type="button" className="btn btn-primary" id="fixMeButton" onClick={bodySelect}>
                     FIX ME
                  </button>
               </div>
               <br />
               <br />
               <br />
            </div>
         )}
         {openModal && <SelectionAdmin bodyPart={formik.values.bodyPart} />}
      </>
   )
  
   // // console.log(userStatus)

   // let userAuthentication = localStorage.getItem("user_status")

   // console.log(userAuthentication)

   // if (userAuthentication === "admin") {
   //    return (
   //       <div>
   //          <NavbarAdmin />
   //          <div id="bodyDigramContainer">
   //             <img id="bodyDiagram" src={BodyDiagram} height={40} />
   //          </div>
   //          <div id="bodDiagramText">
   //             <h1>Select area of injury</h1>
   //          </div>
   //       </div>
   //    )
   // }

   // fetch("https://soar-backend.herokuapp.com/api/body")
}
