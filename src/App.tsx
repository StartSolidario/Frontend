import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"

function App() {
   //Codigo Typescript

   return (
      //Codigo TSX => HTML + CSS
      <> {/*Fragmento -- div fantasma*/}
         <BrowserRouter>
            <Navbar />
            <div className="min-h-[80vh]">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
               </Routes>
            </div>
            <Footer />
         </BrowserRouter>
      </>
   )
}

export default App