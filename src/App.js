import './App.css';
import Home from './page/Landing/Home';
// import Home from './page/Landing/Home';
import LoginPage from './page/auth/Login';
import Signup from './page/auth/Signup';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
      <Route path='/home' element={<Home/>}/>
        <Route path='signup' element={<Signup/>}/>
      </Routes>
    </Router>
    </div>
  );
}


export default App;