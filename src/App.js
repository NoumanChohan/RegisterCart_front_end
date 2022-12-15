import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import WebBar from './Components/WebBar/WebBar';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import SignUp from './Components/Register/SignUp';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';





function App() {
  return (
    <div >
    <WebBar/>
    <Routes>
      <Route path='/' element={ <Home/>}></Route>
      <Route path='/logIn' element={<Login/>}></Route>
      <Route path='/SignUp' element={<SignUp/>}></Route>
      <Route path='/Products' element={<Products/>}></Route>
      <Route path='/Cart' element={<Cart/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
