import './App.css';
import Navbar from './componets/NavBar';
import ItemListContainer from './componets/ItemListContainer';
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
