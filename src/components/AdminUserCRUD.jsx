import React from "react"
import NavbarAdmin from "./NavbarAdmin"
import SoarLogo from "../images/SoarLogo.svg"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect} from "react"
import { Spinner } from "react-bootstrap"
import axios from "axios"

export default function UserCRUD() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [User, setUser] = useState([])

    useEffect(() => {
        axios
           .get("http://localhost:1235/api/users")
           .then((response) => {
              console.log(response)
              // console.log(1, response.data[0])
              setUser(response.data)
           })
           .catch(function (error) {
              // handle error
              console.log(error)
           })
     }, [])
     

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
                              Delete User
                           </button>
                        </div>
                     </div>
                  ))}


        </div>
     )
 }
 