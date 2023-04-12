import './App.css';
import Navbar from './componets/Navbar';
import ItemListContainer from './componets/ItemListContainer';
import { Tooltip, Toast, Popover } from 'bootstrap'

const App = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ItemListContainer></ItemListContainer>
    </div>
  );
}

export default App;
