import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Cadastro from "./pages/cadastro/Cadastro"
import { AuthProvider } from "./contexts/AuthContext"

function App() {
   //Codigo Typescript

   return (
      //Codigo TSX => HTML + CSS
      <> {/*Fragmento -- div fantasma*/}
      <AuthProvider>
         <BrowserRouter>
            <Navbar />
            <div className="min-h-[80vh]">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/cadastro" element={<Cadastro />} />
               </Routes>
            </div>
            <Footer />
         </BrowserRouter>
      </AuthProvider>
      </>
   )
}

export default App