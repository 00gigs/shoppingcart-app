import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './components/navbar';
import {Container} from 'react-bootstrap'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React from 'react';
import Cancel from './pages/CancelM'
import Success from './pages/Success';
import Store from './pages/StoreM';
import  CartProvider  from './cartcontext';


function App() {
  return ( 

    <CartProvider>
    <Container>
      <NavbarComponent></NavbarComponent>
      <BrowserRouter>
        <Routes>
          <Route index element={<Store />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
        </Routes>
      </BrowserRouter>
    </Container>
</CartProvider>

  );
}

export default App;
