import React from "react"
import NavbarUser from "./NavbarUser"
import Climbing from "../images/climbing.svg"
import Skateboard from "../images/skateboard.svg"
import Surf from "../images/surf.svg"
import ContentListUser from "./ContentListUser"
import SportFilter from "./SportFilter"
import InjuryFilter from "./InjuryFilter"
import { Link } from "react-router-dom"
import { Spinner } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useFormik } from "formik"

export default function SelectionUser(bodyPart) {
   const [openModal, setOpenModal] = React.useState(false)
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)
   const [sportSelect, setSport] = useState("")
  

   let formik = useFormik({
      initialValues: {
         sportSelect: "",
      },
      // validationSchema: validateFields,
      // onSubmit: (values) => {
      //   alert("form submitted");
      // },
   })

   function filterContent() {
      console.log(bodyPart)

      var myHeaders = new Headers()
      myHeaders.append("Content-Type", "application/json", "Access-Control-Allow-Origin", "*")
      
      let test = JSON.stringify(bodyPart)
      
      var requestOptions = {
         method: 'POST',
         // headers: myHeaders,
         // body: urlencoded,
         // redirect: 'follow'
         body: test,
         credentials: "include",
      }


      fetch("https://soar-backend.herokuapp.com/api/sport/", requestOptions)
         // fetch("https://soar-backend.herokuapp.com/api/sport/", requestOptions)
         .then((response) => {
            console.log(response)
            console.log(formik.values.sportSelect)

            if (response.status == 200) {
               setSport(response)
               console.log(setSport)

               alert("Success! have selected sport of aquired injury.")
               setOpenModal(true)
               // sportSelect(response)
               console.log(sportSelect)
               // setOpenModal(true)
               // window.location.href = "InjuryFilter"
               return
            }
         })
         .then((data) => {
            // JSON.response
            console.log(data)
         })
         .catch((e) => {
            console.log("response")
            console.log(e)
            alert("Sorry, something isn't right")
            //return;
         })
         .finally(() => {
            setLoading(true)
         })
      // fetch("https://soar-backend.herokuapp.com/api/injury" + sportSelect, requestOptions)
      //    // fetch("https://soar-backend.herokuapp.com/api/injury", requestOptions)
      //    .then((response) => {
      //       console.log(response)
      //       if (response.status == 200) {
      //          console.log(response)

      //          alert("Success! have selected injury type.")
      //          // setOpenModal(true)
      //          window.location.href = "InjuryFilter"
      //          return
      //       }
      //    })
      //    .catch((e) => {
      //       // console.log(bodyContent);
      //       console.log(e)
      //       alert("Sorry, something isn't right")
      //       //return;
      //    })
      //    .finally(() => {
      //       setLoading(true)
      //    })
   }
   //
   useEffect(() => {}, [])
   console.log(formik.values.sportSelect)
   return (
      <>
      {!openModal && (
      <div>
         
         <NavbarUser />
         
         {loading && <Spinner animation="border" />}
         {error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
         <div id="carousellContainer">
            <div className="carousel slide" data-bs-ride="carousel" id="carousel-2">
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <img className="w-100 d-block" src={Climbing} height={40} alt="Slide Image 1" />
                  </div>
                  <div className="carousel-item">
                     <img className="w-100 d-block" src={Skateboard} height={40} alt="Slide Image 2" />
                  </div>
                  <div className="carousel-item">
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
            <form className="form-inline" onSubmit={formik.onSubmit}>
               <div className="form-group">
                  <label>SELECT SPORT</label>
                  <select
                     className="form-control"
                     name="sportSelect"
                     onChange={formik.handleChange}
                     value={formik.values.sportSelect}
                     onBlur={formik.handleBlur}>
                     <option>---</option>
                     <option value="Skateboarding">Skateboarding</option>
                     <option value="Snowboarding">Snowboarding</option>
                     <option value="Surfing">Surfing</option>
                     <option value="Climbing">Climbing</option>
                     <option value="BMX">BMX</option>
                  </select>
               </div>
            </form>
         </div>
        
         <div id="selectionContainer">
           
            <button className="btn btn-primary" id="fixMeButton" type="button" onClick={filterContent}>
               FIX ME
            </button>
           
         </div>
      </div>
   )}
    {openModal && <InjuryFilter bodyPart={formik.values.sport} />}
      </>
   )
}

