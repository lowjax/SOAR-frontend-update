import React from "react"
import { useFormik } from "formik"
import * as yup from "yup"

function register() {
   let validationParamaters = yup.object().shape({
      username: yup
         .string()
         .require("the username field is required")
         .max(10, "must be less than 10 characters")
         .min("must be more than three characters"),
      password: yup.string(),
   })

   let formik = useFormik({
      initialValues: {
         username: "",
         password: "",
         confirmpassword: "",
      },

      validationSchema: validationParamaters,
      onSubmit: (values) => {
         //do something with values
      },
   })
}

export default function Login() {
   return (
      <div>
         <section className="login-clean">
            <form method="post" onSubmit={formik.onSubmit}>
               <h2 className="visually-hidden">Login Form</h2>
               <img src="../assets/img/logo_final.svg" />
               <div className="illustration"></div>
               <div className="mb-3">
                  {formik.errors.username ? <P>{formik.errors.username}</P> : null}
                  <input
                     className="form-control"
                     type="email"
                     name="email"
                     placeholder="Email"
                     onChange={formik.handleChanged}
                     value={formik.values.confirmpassword}
                  />
               </div>
               <div className="mb-3">
                  <input
                     className="form-control"
                     type="password"
                     name="password"
                     placeholder="Password"
                     onChange={formik.handleChanged}
                     value={formik.values.confirmpassword}
                  />
               </div>
               <a href="#">
                  <a
                     className="btn btn-primary d-block w-100"
                     role="button"
                     id="logInButton"
                     href="../user/index.html"
                     data-bs-target="access/index.html">
                     Log In
                  </a>
               </a>
               <a href="../user/createaccount.html">
                  <a
                     className="btn btn-primary d-block w-100"
                     role="button"
                     id="createAccount"
                     href="../user/createaccount.html"
                     data-bs-target="access/index.html">
                     Create Account
                  </a>
               </a>
               <a href="../Admin/indexAD.html">
                  <a
                     className="btn btn-primary d-block w-100"
                     role="button"
                     id="logInButtonAD"
                     href="../Admin/indexAD.html"
                     data-bs-target="access/index.html">
                     Log In (ADMIN)
                  </a>
               </a>
               <a href="../Admin/createaccountAD.html">
                  <a
                     className="btn btn-primary d-block w-100"
                     role="button"
                     id="createAccountAD"
                     href="../Admin/createaccountAD.html"
                     data-bs-target="access/index.html">
                     Create Account (ADMIN)
                  </a>
               </a>
               <div className="mb-3"></div>
               <a className="forgot">Forgot your email or password?</a>
            </form>
         </section>
         <script src="../assets/bootstrap/js/bootstrap.min.js"></script>
      </div>
   )
}
