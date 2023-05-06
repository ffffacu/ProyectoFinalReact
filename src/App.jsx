import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from './componets/NavBar';
import ItemListContainer from './componets/ItemListContainer';
import ItemDetailContainer from "./componets/ItemDetailContainer";
import { Tooltip, Toast, Popover } from 'bootstrap'

const App = () => {
  return (
    <BrowserRouter className="App">
      <Navbar  />
      <Routes>
        <Route path="/" element={<ItemListContainer />}  />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="item/:itemId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
