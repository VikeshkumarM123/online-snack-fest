import './App.css';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import ProductPage from './ProductPage';
import About from './About';
import {Routes,Route} from 'react-router-dom';
import Contact from './Contact';
function App() {
  return (
<>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/Login' element={<Login/>}></Route>
  <Route path='/SignIn' element={<SignUp/>}></Route>
  <Route path='/ProductPage' element={<ProductPage/>}></Route>
  <Route path='/About' element={<About/>}></Route>
  <Route path='/Contact' element={<Contact/>}></Route>
</Routes>
</>
  );
}

export default App;
