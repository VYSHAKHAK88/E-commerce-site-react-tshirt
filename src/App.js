import './App.css';
import HeaderComponent from './components/HeaderComponent';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';


function App() {
  return (
   <>
      <div >
       <HeaderComponent/>
    
         <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/wishlist' element={<Wishlist/>}/>
             <Route path='/cart' element={<Cart/>}/>
             
         </Routes>
           
         <Footer/>
      </div>
   </>
  );
}

export default App;
