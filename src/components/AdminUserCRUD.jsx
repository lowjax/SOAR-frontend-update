import React from "react"
import NavbarAdmin from "./NavbarAdmin"
import SoarLogo from "../images/SoarLogo.svg"
import { BrowserRouter as Router, Routes, Route, resolvePath } from "react-router-dom"
import { useState, useEffect} from "react"
import { Spinner } from "react-bootstrap"
import axios from "axios"



export default function UserCRUD() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [User, setUser] = useState([])
   
    
    const [email, setEmail] = useState({})
    let data=({email:email})

    const [user_status, setStatus] = useState({})
    let status=({user_status:user_status})



    
    

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
      myHeaders.append("Content-Type", "application/json","Access-Control-Allow-Origin", "*","")

      // var requestOptions = {
      //    method: 'delete',
      //    // // headers: myHeaders,
      //    body: value,
      //    // // redirect: 'follow'
      //    // credentials: "include",
      // }
function deleteUser(email) {
   console.log(email)
   var requestOptions = {
      method: 'DELETE',
      // headers: myHeaders,
      headers: {
         'Content-Type': "application/json"
      },
      body: JSON.stringify({email: email}),
      // // redirect: 'follow'
      credentials: "include",
   }
     fetch("http://localhost:1235/api/users/delete", requestOptions)
   //   console.log(requestOptions, data)
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

///////////// update users status /////////////

var myHeaders = new Headers()
      myHeaders.append("Content-Type", "application/json","Access-Control-Allow-Origin", "*","")

      // var requestOptions = {
      //    method: 'delete',
      //    // // headers: myHeaders,
      //    body: value,
      //    // // redirect: 'follow'
      //    // credentials: "include",
      // }
   
}
function updateUser(email) {

   console.log(email)
   var requestOptions = {
      method: 'PATCH',
      // headers: myHeaders,
      headers: {
         'Content-Type': "application/json"
      },
      body: JSON.stringify({user_status: user_status, email: email}),
     
      // // redirect: 'follow'
      credentials: "include",
   }
  
     fetch("http://localhost:1235/api/users/update", requestOptions)
   //   console.log(requestOptions, data)
     .then((response) => {
      console.log(response)
      if (response.status == 200) {
         console.log(response)

         alert("Success! You have updated a user")
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
                           <select name="" id="" value={users.user_status}>
                              <option value="admin">Admin</option>
                              <option value="general">Genreal</option>
                           </select>
                           <button className="btn btn-primary" id="favoritesButton" type="button"
                           onClick={()=>{updateUser(users.user_status)}}>
                              UPDATE
                           </button>
                           <button onClick={()=>{deleteUser(users.email)}}>
                              Delete
                           </button>
                           {/* <button onClick={(params) => {
                              setEmail(params.rows.email);deleteUser()
                              }}>
                              DELETE
                           </button> */}
                        </div>
                     </div>
                  ))}


        </div>
     )
 }