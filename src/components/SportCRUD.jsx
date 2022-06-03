import React from "react"
import NavbarAdmin from "./NavbarAdmin"
import SoarLogo from "../images/SoarLogo.svg"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Spinner } from "react-bootstrap"
import { useState, useEffect } from "react"
import axios from "axios"


axios.defaults.withCredentials = true




export default function SportCRUD() {
        const [loading, setLoading] = useState(false)
        const [error, setError] = useState(null)
        const [sport, setSport] = useState([])

        useEffect(() => {
            axios
               .get("http://localhost:1235/api/sport")
               .then((response) => {
                  console.log(1, response)
                  // console.log(1, response.data[0])
                  setSport(response.data)
               })
               .catch(function (error) {
                  // handle error
                  console.log(error)
               })
         }, [])
         console.log(2, sport)

        
    return (
        <div>
            <NavbarAdmin />
            {loading && <Spinner animation="border" />}

{sport ?
         sport.map(item => (
            <div class="card">
               <div className="card-body" id="contentCard" key={item.sport}>
                  <form action="">
                      <h4>SPORT</h4>
                      <input type="text" name="" value={item.sport}/>
                      <input type="text" name="" value={item.desc}/>
                      <button className="btn btn-primary" id="favoritesButton" type="button">
                        Update
                      </button>
                      <button className="btn btn-primary" id="favoritesButton" type="button">
                         Delete
                      </button>
                  </form>
                 
                
               </div>
            </div>
         )) : null}

        </div>
     )
 }