import './App.css';
import Navbar from './componets/NavBar/Navbar.jsx';
import ItemListContainer from './componets/ItemListContainer.jsx';
import { Tooltip, Toast, Popover } from 'bootstrap'

const App = () => {
  return (
    <div className="App">
      <Navbar  />
      <ItemListContainer />
    </div>
  );
}

export default App;
