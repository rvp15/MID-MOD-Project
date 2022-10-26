import './App.css';
import NavBar from './components/NavBar';
// import { Route, Routes} from "react-router-dom";
// import { Provider } from 'react-redux'
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      {/* <Provider>
     </Provider> */}
     <NavBar/>
     <Home/>
    </div>
  );
}

export default App;
