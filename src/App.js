import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Styles
import './App.css';

// Views
import Home from './Views/Home/Home';
import Cart from './Views/Cart/Cart';
import Login from './Views/Login/Login';
import AboutUs from './Views/AboutUs/AboutUs';
import Developers from './Views/Developers/Developers';
import Review from './Views/Reviews/Review';
import Register from './Views/Register/Register';


//layOut & Context Provider
import MainLayOut from './Customs/MainLayOut/MainLayOut';
import { ProductsContextProvider } from './Context/ProductsContext';
import Products from './Views/Products/Products';

function App() {
  return (
    <BrowserRouter>
      <ProductsContextProvider>
        <MainLayOut>
          <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/cart"  element={ <Cart /> }/>
            <Route path="/products"  element={ <Products /> }/>
            <Route path="/login"  element={ <Login /> }/>
            <Route path="/aboutus"  element={ <AboutUs /> }/>
            <Route path="/developers" element={ <Developers />}/>
            <Route path="/reviews" element={<Review/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
          </MainLayOut>
      </ProductsContextProvider>
    </BrowserRouter>
  );
}

export default App;
