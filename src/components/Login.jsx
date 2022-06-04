
import React from "react"
import SoarLogo from "../images/SoarLogo.svg"
import IndexUser from "./IndexUser"
import { Link, useNavigate } from "react-router-dom"
import IndexAdmin from "./IndexAdmin"
import CreateAccountUser from "./CreateAccountUser"
import CreateAccountAdmin from "./CreateAccountAdmin"
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Spinner } from "react-bootstrap"
import { useFormik } from "formik"
import {MdEmail} from "react-icons/md"
import {RiLockPasswordFill} from "react-icons/ri"

// import { useCookies } from "react-cookie";

export default function Login() {
  

    const onChangePassword = (e) => {
       const password = e.target.value;
       setPassword(password)
    }

    const onChangeEmail = (e) => {
       const email = e.target.value;
       setEmail(email);
    }


  
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)

   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")


   const login = (event) => {
      event.preventDefault()
      var myHeaders = new Headers()
      myHeaders.append("Content-Type", "application/json")
     
      let please = JSON.stringify({
         email: email,
         password: password,
      })
      let urlencoded = please
   

      var requestOptions = {
         method: "POST",
         headers: myHeaders,
         body: urlencoded,
         // redirect: 'follow',
         credentials: "include",
      }

      localStorage.setItem("email", email)

      fetch("https://soar-backend.herokuapp.com/api/users/login", requestOptions)
         // .then(response => response.text())
         // .then(result => console.log(result))
         // .catch(error => console.log('error', error));
         .then((response) => {
            if (response.status == 200) {
               // console.log(response);
               alert("Success! You are now signed in.")
               return response.json()
               // window.location.href = "IndexUser";
               return
            }
            //IF invalid password, do something to tell user
            else {
               alert("Invalid password, try again.")
            }

            // window.location.href= "IndexUser";
         })
         .then((json) => {
            // console.log(json)
            // console.log(json.user_status)
            if (json.user_status == "admin") {
               // let navigate = useNavigate();
               // navigate("/IndexAdmin");
               window.location.href = "AdminUserCRUD"
            } else if (json.user_status != "admin") {
               window.location.href = "IndexUser"
            }
         })
         .catch((e) => {
            // console.log(bodyContent)
            console.log(e)
            alert("Sorry, something isn't right")
            return
         })
         .finally(() => {
            setLoading(true)
         })
   }
   //
   // useEffect(() => {}, [])

   return (
      <div>
         {loading && <Spinner animation="border" />}
         {error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
         <section className="login-clean">
            <form onSubmit={login}>
               <h2 className="visually-hidden">Login Form</h2>
               <img src={SoarLogo} heigh={40} />
               <div className="illustration"></div>

               <div className="mb-3">
               <MdEmail/>
               
                  <input

                     className="form-control"
                     type="email"
                     name="email"
                     placeholder="Email"
                     // pattern="[A-Za-z0-9\-_\.\@]{4,20}" title="Four or more characters"
                     required
                     value={email}
                     onChange={onChangeEmail}
                     onSubmit={login}
                  />
                  
               </div>
               <div className="mb-3">
                  <RiLockPasswordFill/>
                  <input
                     className="form-control"
                     type="password"
                     name="password"
                     // pattern="[A-Za-z0-9\-_\.]{4,20}" 
                     
                     title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
               
                     placeholder="Password"
                     required
                     value={password}
                     onChange={onChangePassword}
                     onSubmit={login}
                  />
               </div>
               <button type="submit" className="btn btn-primary d-block w-100">
                  {" "}
                  Login
               </button>

               <Link
                  className="btn btn-primary d-block w-100"
                  role="button"
                  id="createAccount"
                  as={Link}
                  to="/CreateAccountUser"
                  element={CreateAccountUser}
                  data-bs-target="access/index.html">
                  Create Account
               </Link>
            </form>
            
         </section>
         <script src="../assets/bootstrap/js/bootstrap.min.js"></script>
      </div>
   )
}
