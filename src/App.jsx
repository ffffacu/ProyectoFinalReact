import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import NavBar from './componets/NavBar';
import ItemListContainer from './componets/ItemListContainer';
import ItemDetailContainer from "./componets/ItemDetailContainer";
import Cart from "./componets/Cart/Cart";
import Checkout from "./componets/Checkout";
import { Tooltip, Toast, Popover } from 'bootstrap'
import Footer from "./componets/Footer";
import { useEffect, useState } from "react";
import { getCollection } from "./utils/getFirestore";

const App = () => {
  const [categoria, setCategoria]= useState();

useEffect(()=>{
  getCollection ("Categorias").then((result)=>{
    setCategoria(result)
  })},[])


  return (
    <BrowserRouter className="App">
      {categoria ? <NavBar  category={categoria} /> : null}
      <Routes>
        <Route path="/" element={<ItemListContainer />}  />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="item/:itemId" element={<ItemDetailContainer /> } /> 
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
