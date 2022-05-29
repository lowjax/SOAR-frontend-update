import React from "react"
import NavbarUser from "./NavbarUser"
import { useState } from "react"

export default function LogoutUser() {
   // code funtionality for posting user logout

   // code funtionality for posting user login

   // const [email, setEmail] = useState("")
   // const [password, setPassword] = useState("")
   // // Change values based on event, the event being the form input
   // const onChangeEmail = (e) => {
   //   const email = e.target.value;
   //   setEmail(email);
   // }
   // const onChangePassword = (e) => {
   //   const password = e.target.value;
   //   setPassword(password);
   // }

   function logout() {
      console.log("Something")
      var myHeaders = new Headers()
      myHeaders.append("Content-Type", "application/json")
      // myHeaders.append("Cookie", "connect.sid=s%3AiNey66thtOHrn2SygW8lVhMM61L7q8ev.18el9se6qBgGdY%2BYeUvHotKafiCEPdL2iv6XTNpPsiw");

      // var urlencoded = new URLSearchParams();
      // urlencoded.append("email", "dallas@thankyou.com");
      // urlencoded.append("password", "thankyou");
      // let please = JSON.stringify({
      //   email: email,
      //   password: password,
      // });
      // let urlencoded = please;

      var requestOptions = {
         method: "POST",
         headers: myHeaders,
         // body: urlencoded,
         // redirect: "follow",
         credentials: "include",
      }
      console.log("Before Fetch")

      fetch("http://localhost:1235/api/users/logout", requestOptions)
         // .then((response) => response.json())
         // .then(result => console.log(result))
         // .catch(error => console.log('error', error));
         .then((response) => {
            console.log(response)
            if (response.status === 200) {
               console.log(response)

               alert("Success! You are now logged out.")
               window.location.href = "Login"
               return
            } else {
               console.log("nooooooooooooooooooooo")
            }
         })
         .catch((e) => {
            // console.log(bodyContent)
            console.log(e)
            alert("Sorry, something isn't right")
            //return;
         })
   }

   function handleSubmit(e) {
      e.preventDefault()
      console.log("You clicked submit.")

      fetch("http://localhost:1235/api/users/logout", {
         method: "POST",
      })
         .then((response) => response.json())
         .then((json) => console.log(json))
   }

   return (
      <div>
         <NavbarUser />
         <div id="logoutDiv">
            <h1 id="logoutHeader">LOGOUT</h1>
            <p id="logoutParagraph">
               By clicking below you are exiting SAOR, all unsaved progressed will deleted. Are you sure you want to
               logout?
            </p>
            <button type="button" onClick={logout}>
               Logout
            </button>
         </div>
      </div>
   )
}
