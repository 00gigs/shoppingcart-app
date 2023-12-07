import {Button,Container,Navbar,Modal} from 'react-bootstrap'
import { useState } from 'react'
function Navbarcomponent() {
const [show,setShow]= useState(false)
const handleClose = ()=>setShow(false)
const handleShow = ()=>setShow(true)
return(
    <>
    <Navbar expand="sm">
        <Navbar.Brand href='/'>Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
            <Button onClick={handleShow}>Cart with 0 item </Button>
        </Navbar.Collapse>
    </Navbar>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <h1>this is the modal{/**modal is alert pop up */} body</h1>
        </Modal.Body>
    </Modal>
    </>
)
    
}

export default Navbarcomponent