import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import { transformPrice } from '../utils/PriceCalculator';

import './css/navbar.css';


function NavbarComponent(cartShopping) {

  let [myCart, setMyCart] = useState(null);
  let total = 0
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setMyCart(cartShopping.cartShopping)
  }, [cartShopping]);

  return (
    <div>
      <Navbar bg="light" expand="lg" className='navbar-content'>
        <Navbar.Brand href="#home">Wetaca</Navbar.Brand>
        <Button variant="outline-primary" size="sm" onClick={() => handleShow()} > <i className="fas fa-shopping-cart mr-2"></i> My Cart </Button>
      </Navbar>
      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body>
          {myCart === null || myCart.length === 0 ?
            <>
              <h6>The cart is empty</h6>
            </>
            :
            <>
              <Modal.Title id="contained-modal-title-vcenter">
                Buy my next menu
              </Modal.Title>

              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Dish</th>
                    <th>Quantity</th>
                    <th>Price/Unit</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {myCart.map((item, idx) => {
                    total = total + (item.dishPrice * item.quantity);
                    return (
                      <tr key={idx}>
                        <td>{item.dishName}</td>
                        <td>{item.quantity}</td>
                        <td>{`${transformPrice(item.dishPrice)}`}</td>
                        <td>{`${transformPrice(item.dishPrice * item.quantity)}`}</td>
                      </tr>
                    )
                  })}
                  <tr>
                    <td colSpan="3">Total</td>
                    <td>{`${transformPrice(total)}`}</td>
                  </tr>
                </tbody>
              </Table>
            </>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Buy
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

const mapStatetoProps = (state) => ({
  cartShopping: state.cartShopping.cart,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStatetoProps, mapDispatchToProps)(NavbarComponent);
