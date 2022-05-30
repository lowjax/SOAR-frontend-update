import React from "react"
import NavbarAdmin from "./NavbarAdmin"
import SoarLogo from "../images/SoarLogo.svg"
import { BrowserRouter as Router, Routes, Route, resolvePath } from "react-router-dom"
import { useState, useEffect} from "react"
import { Spinner } from "react-bootstrap"
import axios from "axios"

export default function UserCRUD(params) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [User, setUser] = useState([])
    
    const [email, setEmail] = useState({})
    let data=({email:email})
    

    useEffect(() => {
           fetch("http://localhost:1235/api/users", {
            credentials: "include",
           })
           .then((res) => res.json())
           .then((json) => {
              console.log(json)
              setUser(json)
           })
           .catch(function (error) {
              // handle error
              console.log(error)
           })

          
     }, [])
     
     var myHeaders = new Headers()
      myHeaders.append("Content-Type", "application/json")

      // var requestOptions = {
      //    method: 'delete',
      //    // // headers: myHeaders,
      //    body: value,
      //    // // redirect: 'follow'
      //    // credentials: "include",
      // }
function deleteUser(params) {
   var requestOptions = {
      method: 'DELETE',
      // // headers: myHeaders,
      body: params.rows.email,
      // // redirect: 'follow'
      // credentials: "include",
   }
     fetch("http://localhost:1235/api/users/delete", + requestOptions)
     console.log(requestOptions, data)
     .then((response) => {
      console.log(response)
      if (response.status == 200) {
         console.log(response)

         alert("Success! You have deleted a user")
         // setOpenModal(true)
         window.location.href = "AdminUserCRUD"
         return
      }
   })
   .catch((e) => {
      // console.log(bodyContent);
      console.log(e)
      alert("Sorry, something isn't right")
      //return;
   })
   
}
     

    return (
        <div>
            <NavbarAdmin />
            
            {User &&
                  User.map(users => (
                     <div class="card">
                        <div className="card-body" id="contentCard" key={users.email}>
                           
                           <h4 className="card-title">{users.email}</h4>
                           <p className="card-text">{users.first_name}</p>
                           <p className="card-text">{users.last_name}</p>
                           <p className="card-text">{users.phone}</p>
                           <p className="card-text">{users.date_joined}</p>
                           <p className="card-text">{users.user_status}</p>
                           <button className="btn btn-primary" id="favoritesButton" type="button">
                              UPDATE
                           </button>
                           <button onClick={(params) => {
                              setEmail(params.rows.email);deleteUser()
                              }}>

                              DELETE
                           </button>
                        </div>
                     </div>
                  ))}


        </div>
     )
 }
 