import React from "react"
import axios from "axios"
// // import NavbarUser from "./NavbarUser";
// import { Link } from "react-router-dom"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhysioContent from "../images/PhysioContent.jpg"
import NavbarUser from "./NavbarUser"
import { Spinner } from "react-bootstrap"
import { useState, useEffect } from "react"

// axios.defaults.withCredentials = true

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
            console.log(response)
            // console.log(1, response.data[0])
            setContent(response.data)
         })
         .catch(function (error) {
            // handle error
            console.log(error)
         })
   }, [])
   console.log(content)
   // console.log(4, content.injury)
   // var myHeaders = new Headers();
   // myHeaders.append("Content-Type", "application/json");

   // var requestOptions = {
   //   // method: 'GET',
   //   // headers: myHeaders,
   //   // body: urlencoded,
   //   // redirect: 'follow'
   //   credentials: "include",
   // };
   // fetch("http://localhost:1235/api/content", requestOptions)
   //   .then((response) => {
   //     setContent(response.data)
   //     console.log(response);
   //     if (response.status == 200) {
   //       console.log(response);

   //       // alert("Success! have selected sport of aquired injury.");
   //       // setOpenModal(true)
   //       // window.location.href = "ContentListUser";
   //       return;
   //     }
   //   })
   //   .catch((e) => {
   //     console.log("response");
   //     console.log(e);
   //     alert("Sorry, something isn't right");
   //     //return;
   //   })
   //   .finally(() => {
   //     setLoading((true));
   //   });

   // //
   // useEffect(() => {

   // } , [])

   return (
      <div>
         <NavbarUser />
         {loading && <Spinner animation="border" />}
         {error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
         <div id="contentContainer">
            <div className="card-group">
               {content.map((item) => {
                  console.log(item)
               })}

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
         </div>
      </div>
   )
}
