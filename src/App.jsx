import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";  // Libreria di routing
import HomePage from './pages/HomePage';                          // Pagina home
import ChiSiamoPage from './pages/ChiSiamoPage';                  // Pagina chi siamo
import ProdottiPage from './pages/ProdottiPage';                  // Pagina prodotti


function App() {

  return (
    <>

      {/*  */}

      {/*****************************
            GESTIONE DELLE ROTTE
      *******************************/}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/chi-siamo" element={<ChiSiamoPage/>} />
          <Route path="/prodotti" element={<ProdottiPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
