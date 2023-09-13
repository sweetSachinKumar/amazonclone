import './App.css';
import Checkout from './amazon-component/Checkout'; 
import Header from './amazon-component/Header'; 
import Signin from './amazon-component/Signin'; 
import Home from './amazon-component/Home';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
<>
<Router>
<Header/>
  <Routes>
    <Route path='/' element={<Home/>}  />
    <Route path='/checkout' element={<Checkout/>}  />
    <Route path='/signin' element={<Signin/>}  />
  </Routes>
</Router>


</>   
  );
}

export default App;
