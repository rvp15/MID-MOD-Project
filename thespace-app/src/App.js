

import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Liked from './pages/Liked';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/liked' element={<Liked/>}/>
     </Routes>
    
    </div>
  );
}

export default App;
