import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './Layout'
import Home from './pages/Home'
import Clothes from './pages/Clothes'
import Electronics from './pages/Electronics'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path='/clothes' element={<Clothes/>} />
          <Route path='/electronics' element={<Electronics/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
