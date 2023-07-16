import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Shuls from './components/Shuls';
import AddShul from './components/AddShul';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/shuls">Shuls</Link>
            </li>
            <li>
              <Link to="/add-shul">Add Shul</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shuls" element={<Shuls />} />
          <Route path="/add-shul" element={<AddShul />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
