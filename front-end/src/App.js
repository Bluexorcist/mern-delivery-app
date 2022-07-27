import './App.css';
import NavbarApp from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Shop from "./components/Shop/Shop";
import Main from "./components/Main/Main";
import ProductPage from "./components/Shop/ProductPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavbarApp/>
                <Routes>
                    <Route path='/product/:slug' element={<ProductPage/>}/>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/shop' element={<Shop/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
