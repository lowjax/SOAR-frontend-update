
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
   // code funtionality for posting user login
   // //cookie provider details
   // const [cookie, setCookie] = useCookies(['user']);
   // let validationParamaters = yup.object().shape({
   //    email: yup
   //       .string()
   //       .require("the username field is required")
   //       .max(10, "must be less than 10 characters")
   //       .min("must be more than three characters"),
   //    password: yup.string(),
   // })

   // let formik = useFormik({
   //    initialValues: {
   //       email: "",
   //       password: "",
         
   //    },

   //    validationSchema: validationParamaters,
   //    onSubmit: (values) => {
   //       //do something with values
   //    },
   // })

  
  
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)

   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const onChangeEmail = (e) => {
      const email = e.target.value
      setEmail(email)
   }
   const onChangePassword = (e) => {
      const password = e.target.value
      setPassword(password)
   }

   const loginUser = (event) => {
      event.preventDefault()
      var myHeaders = new Headers()
      myHeaders.append("Content-Type", "application/json")
      // myHeaders.append("Cookie", "connect.sid=s%3AeoWXMsnyAi_F7xK6t9SDqDADcPiah1hN.D7oNoRfUQQXXb9z3cCW0mtK5TOdoIsQHHFcv%2Bo0W9cM");

      // var urlencoded = new URLSearchParams();
      let please = JSON.stringify({
         email: email,
         password: password,
      })
      let urlencoded = please
      // var urlencoded = JSON.stringify({email: email, password: password})

      // urlencoded.append("email", "password");

      var requestOptions = {
         method: "POST",
         headers: myHeaders,
         body: urlencoded,
         // redirect: 'follow',
         credentials: "include",
      }

      localStorage.setItem("email", email)

      fetch("http://localhost:1235/api/users/login", requestOptions)
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
            <form onSubmit={loginUser}>
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
                     value={email}
                     onChange={onChangeEmail}
                  />
                  
               </div>
               <div className="mb-3">
                  <RiLockPasswordFill/>
                  <input
                     className="form-control"
                     type="password"
                     name="password"
                     placeholder="Password"
                     value={password}
                     onChange={onChangePassword}
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
            {/* <Link
              className="btn btn-primary d-block w-100"
              role="button"
              id="logInButton"
              as={Link}
              to="/IndexUser"
              element={IndexUser}
              data-bs-target="access/index.html"
            >
              Log In
            </Link>
          
          
            <Link
              className="btn btn-primary d-block w-100"
              role="button"
              id="createAccount"
              as={Link}
              to="/CreateAccountUser"
              element={CreateAccountUser}
              data-bs-target="access/index.html"
            >
              Create Account
            </Link>
          
         
          <Link
              className="btn btn-primary d-block w-100"
              role="button"
              id="logInButtonAD"
              as={Link}
              to="/IndexAdmin"
              element={IndexAdmin}
              data-bs-target="access/index.html"
            >
              Log In (ADMIN)
            </Link> 
            <Link
              className="btn btn-primary d-block w-100"
              role="button"
              id="createAccount"
              as={Link}
              to="/CreateAccountAdmin"
              element={CreateAccountAdmin}
              data-bs-target="access/index.html"
            >
              Create Account (ADMIN)
            </Link>
          <div className="mb-3"></div>
          <a className="forgot">Forgot your email or password?</a> */}
            {/* </form> */}
         </section>
         <script src="../assets/bootstrap/js/bootstrap.min.js"></script>
      </div>
   )
}
