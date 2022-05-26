import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Icones from './components/Icones';
import HeroText from './components/HeroText';

function App() {
  return (
    <div className="App">     

      <div className='navbar'>
        <div>
          <Navbar/>
          <HeroText/>
        </div>
      </div>

      <div className="d-flex inline">
        <Icones/>
      </div>
    </div>
  );
}

export default App;
