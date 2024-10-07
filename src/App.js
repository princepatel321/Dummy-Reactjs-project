
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Prodcustshow from './Prodcustshow';

function App() {
  return (
    <div className="App">
         <Router>
          <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Prodcustshow/:id' element={<Prodcustshow/>}/>
          </Routes>
         </Router>
       
     
    </div>
  );
}

export default App;
