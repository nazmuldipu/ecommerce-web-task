import { useSelector } from "react-redux";

import './App.css'

import { Products, Cart, Navbar } from './components/templates'
import { ProductState } from './types';

function App() {
  const showCart = useSelector((state: ProductState) => state.entities.cart.show);

  return (
    <div className="App max-w-full p-0 mx-auto my-0 text-center ">
      <Navbar />
      <Products />
      {showCart && <Cart />}
    </div>
  )
}

export default App
