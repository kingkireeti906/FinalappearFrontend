import Register from "../Components/registerpage/registerpage"
import LoginPage from '../Components/loginpage/loginpage'
import HomePage from "../Components/Homepage/Homepage"
import ProductDetailsPage from "../Components/productDetailpage/ProductDetailpage"
import SuccessPage from "../Components/Successfulpage/Sucessfulpage"
import MyCart from '../Components/Mycart/Mycart'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Checkout from '../Components/checkout/checkout'
import Invoice from '../Components/Invoice/Invoice';
import MyInVoice from "../Components/Myinvoice/Myinvoice"


function App() {
  return (
   <>
     <BrowserRouter basename="/FinalappearFrontend/">
        <Routes>
        <Route path="/" element={<HomePage/> } />
        <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/ProductDetails" element={<ProductDetailsPage />} />
          <Route path="/Sucess" element={< SuccessPage  />} />
          <Route path="/MyCart" element={< MyCart  />} />
          <Route path="/checkout" element={< Checkout  />} />
          <Route path="/Invoice" element={< Invoice  />} />
          <Route path="/MyInVoice" element={< MyInVoice  />} />
          
        </Routes>
        </BrowserRouter>
        
 

        
  
  
   </>
  )
}

export default App