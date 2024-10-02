import { AuthProvider } from "./contexts/AuthContext"
import { CartProvider } from "./contexts/CartContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"

import Login from "./pages/login/Login"
import Cadastro from "./pages/cadastro/Cadastro"
import CadastroAdm from "./pages/cadastro/CadastroAdm"

import Sobre from "./pages/sobre/Sobre"

import ListarCategoria from "./components/categorias/adm/listarcategorias/ListarCategoria"
import FormularioCategoria from "./components/categorias/adm/formcategoria/FormularioCategoria"
import DeletarCategoria from "./components/categorias/adm/deletarcategoria/DeletarCategoria"

import ListarProdutos from "./components/produtos/adm/listarprodutos/ListarProdutos"
import FormularioProduto from "./components/produtos/adm/formproduto/FormularioProduto"
import DeletarProduto from "./components/produtos/adm/deletarproduto/DeletarProduto"

import ListarViagens from "./components/viagens/adm/listarviagens/ListarViagens"

import 'react-toastify/dist/ReactToastify.css'

import EquipeContato from "./pages/equipecontato/EquipeContato"

import FiltroCategoria from "./components/categorias/comum/filtrocategoria/FiltroCategoria"

import Produtos from "./pages/produtos/Produtos"
import FiltroComum from "./components/produtos/comum/filtrocomum/FiltroComum"
import FiltroAdm from "./components/produtos/adm/filtroadm/FiltroAdm"

import Cart from "./components/carrinho/cart/Cart"

function App() {
   //Codigo Typescript

   return (
      //Codigo TSX => HTML + CSS
      <> {/*Fragmento -- div fantasma*/}
         <AuthProvider>
            <CartProvider>
               <ToastContainer />
               <BrowserRouter>
                  <Navbar />
                  <div className="min-h-[80vh]">
                     <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                        <Route path="/cadastro_adm" element={<CadastroAdm />} />

                        <Route path="/sobre" element={<Sobre />} />
                        <Route path="/contato" element={<EquipeContato />} />

                        <Route path="/categorias_adm" element={<ListarCategoria />} />
                        <Route path="/cadastrocategoria_adm" element={<FormularioCategoria />} />
                        <Route path="/editarcategoria_adm/:id" element={<FormularioCategoria />} />
                        <Route path="/deletarcategoria_adm/:id" element={<DeletarCategoria />} />

                        <Route path="/produtos_adm" element={<ListarProdutos />} />
                        <Route path="/cadastroproduto_adm" element={<FormularioProduto />} />
                        <Route path="/editarproduto_adm/:id" element={<FormularioProduto />} />
                        <Route path="/deletarproduto_adm/:id" element={<DeletarProduto />} />

                        <Route path="/viagens_adm" element={<ListarViagens />}/>

                        <Route path="/produtos" element={<Produtos />} />
                        <Route path="/produtos/nome/:keyword" element={<FiltroComum />} />
                        <Route path="/produtos_adm/nome/:keyword" element={<FiltroAdm />} />

                        <Route path="/categorias/:id" element={<FiltroCategoria />} />

                        <Route path="/cart" element={<Cart />} />
                     </Routes>
                  </div>
                  <Footer />
               </BrowserRouter>
            </CartProvider>
         </AuthProvider>
      </>
   )
}

export default App