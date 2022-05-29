// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react"
import { Button, Container, Image } from "react-bootstrap"
import SoarLogo from "../images/SoarLogo.svg"
import NavbarUser from "./NavbarUser"

function LeSettings() {
   const [lightMode, setLightMode] = React.useState(false)

   window.localStorage.setItem("theme setting", lightMode)

   React.useEffect(() => {
      const json = localStorage.getItem("site-light-mode")
      const currentMode = JSON.parse(json)
      if (currentMode) {
         setLightMode(true)
      } else {
         setLightMode(false)
      }
   }, [])

   React.useEffect(() => {
      if (lightMode) {
         document.body.classList.add("light")
      } else {
         document.body.classList.remove("light")
      }
      const json = JSON.stringify(lightMode)
      localStorage.setItem("site-light-mode", json)
   }, [lightMode])

   return (
      <div>
         <NavbarUser />
         <br />
         <br />
         <br />
         <br />
         <Container className="align-center text-center">
            <Image
               className="text-center"
               alt="Soar Logo"
               src={SoarLogo}
               height={50}
               style={{ minWidth: "10em", maxWidth: "24em", alignSelf: "center" }}
            />
         </Container>
         <br />
         {/* <br/> */}
         <Container className="align-center text-center">
            {/* <h1>Settings</h1> */}
            <br />
            <Button onClick={() => setLightMode(!lightMode)}> Change to Dark Mode Settings</Button>
            <br />
         </Container>

         <br />
         <br />
         <br />

         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
      </div>
   )
}

export default LeSettings
