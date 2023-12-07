import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarcomponent from './components/navbar';
import {container} from 'react-bootstrap'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React from 'react';
import Cancel from './pages/CancelM'
import Success from './pages/Success';
import Store from './pages/StoreM';



function App() {
  return (
    <container>
  <Navbarcomponent></Navbarcomponent>
  <BrowserRouter>
  <Routes>
    <Route index element={<Store/>}/>
    <Route path='Success' element={<Success/>}/>
    <Route path='Cancel' element={<Cancel/>}/>
  </Routes>
  </BrowserRouter>
    </container>
  );
}

export default App;
