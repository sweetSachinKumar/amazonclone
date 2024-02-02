import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Checkout from './pages/Checkout';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignUp />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
