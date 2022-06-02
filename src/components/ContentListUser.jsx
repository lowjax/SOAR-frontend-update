import React from "react"
import axios from "axios"
// // import NavbarUser from "./NavbarUser";
// import { Link } from "react-router-dom"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhysioContent from "../images/PhysioContent.jpg"
import NavbarUser from "./NavbarUser"
import { Spinner } from "react-bootstrap"
import { useState, useEffect } from "react"


axios.defaults.withCredentials = true

// // import { Content } from "../contentdata";

// // useEffect(() => {
// //   Axios.get("http://localhost:1235/api/content")
// //   .then((response) => {
// //     setContent(response.data)
// //   })
// // }, [])

export default function ContentListUser() {
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)
   const [content, setContent] = useState([])

   useEffect(() => {
      axios
         .get("http://localhost:1235/api/content")
         .then((response) => {
            console.log(1, response)
            // console.log(1, response.data[0])
            setContent(response.data)
         })
         .catch(function (error) {
            // handle error
            console.log(error)
         })
   }, [])
   console.log(2, content)
  

   return (
      <div>
         <NavbarUser />
         {loading && <Spinner animation="border" />}

         {content ?
                  content.map(item => (
                     <div class="card">
                        <div className="card-body" id="contentCard" key={item.ID}>
                           
                           <img id="physioImage" src={PhysioContent} height={40} />
                           <h4 className="card-title">{item.injury}</h4>
                           <p className="card-text">{item.file_name}</p>
                           <button className="btn btn-primary" id="favoritesButton" type="button">
                              Add to favorites
                           </button>

                         
                        </div>
                     </div>
                  )) : null}
         
         {/* {error && <div>{`There is a problem fetching the post data - ${error}`}</div>}

         <div id="contentContainer">
            <div class="card"  id="contentCard">

               {content &&
                  content.map((content) => (
                     <div class="card">
                        <div className="card-body" id="contentCard">
                           <img id="physioImage" src={PhysioContent} height={40} />
                           <h4 className="card-title">{content.injury}</h4>
                           <p className="card-text">{content.file_name}</p>
                           <button className="btn btn-primary" id="favoritesButton" type="button">
                              ADD TO FAVORITES
                           </button>
                        </div>
                     </div>
                  ))}
            </div>
         </div> */}
      </div>
   )
}
