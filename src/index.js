import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./app"
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"

import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { CookiesProvider } from "react-cookie";

// const appElement = document.getElementById("app")
// ReactDOM.render(<App />, appElement)
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route path="*" element={<App />} />
         </Routes>
      </BrowserRouter>
   </React.StrictMode>
)

serviceWorkerRegistration.register()
