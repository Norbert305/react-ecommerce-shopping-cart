import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import ShopContextProvider from './context/shop-context';

function App() {

  //npm i react-router-dom --> navigation
  //npm i @phosphor-icons/react ---> icons for our shopping store

  
  //routes for navigation using our navbar component to oversee the rendered pages

  return (
        <div className='App'>
          <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
           <Route path="/" element={<Shop />}/>
           <Route path="/cart" element={<Cart />}/>
            </Routes>
          </Router>
          </ShopContextProvider>
        </div>
  )
}
//ShopContext provider is being wrapped around our components so we have access everywhere. 
export default App
//cd frontend
//npm run dev
//npm create vite@latest

//---------------------------------------------------------------------------------------------------------------------

//for deployment ---> cd frontend / npm run build / check dist folder / copy dist folder into Hostinger for deployment
