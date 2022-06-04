import React from "react"
import axios from "axios"
import PhysioContent from "../images/PhysioContent.jpg"
import NavbarUser from "./NavbarUser"
import { Spinner } from "react-bootstrap"
import { useState, useEffect } from "react"


axios.defaults.withCredentials = true




export default function ContentListUser() {
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)
   const [content, setContent] = useState([])


   
   useEffect(() => {
      axios
         .get("https://soar-backend.herokuapp.com/api/content")
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
         
         
      </div>
   )
}
