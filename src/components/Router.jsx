import { Routes, Route } from 'react-router-dom'
import Home from "../views/Home";
import Catalog from '../views/Catalogo';
import Navbar from '../views/partials/Navbar';
import Footer from '../views/partials/Footer';
import RegisterProduct from '../views/RegisterProduct';

const Router = () =>{
    return(
        <div>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/catalogo' element={<Catalog/>} />
                <Route path='/registrar-producto' element={<RegisterProduct/>} />
            </Routes>
            <Footer/>
        </div>
    )
}

export default Router;