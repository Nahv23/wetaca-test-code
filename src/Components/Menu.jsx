import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addDishToCartAction } from '../Actions';

import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './css/Menu.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


const Menu = ({ addDish }) => {

  const [dataDishes, setDataDishes] = useState(null);
  let [quantity, setQuantity] = useState(1);

  const query = `query dishes {
    dishes {
      name
      price
      image
    }
  }`
  const url = 'http://localhost:4000';
  const opt = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  };

  useEffect(() => {
    fetch(url, opt)
      .then(res => res.json())
      .then(res => setDataDishes(res.data.dishes))
      .catch(err => console.error(err));
  }, [setDataDishes]);

  const transformPrice = (price) => {
    let stringPrice = price.toString()
    let result = stringPrice.slice(0, stringPrice.length - 2) + ',' + stringPrice.slice(stringPrice.length - 2).concat(' €')
    return result;
  }

  const decrease = () => {
    setQuantity(quantity - 1);
  }

  const increase = () => {
    setQuantity(quantity + 1);
  }

  const addDishToCart = (dishSelected) => {
    let dishInfo = {
      name: dishSelected.name,
      price: dishSelected.price,
      quantity: quantity
    }
    addDish(dishInfo);
    setQuantity(1);
  }

  if (dataDishes === null) {
    return (
      <div className='main-content'>
        <div className='spinner-content'>
          <Spinner animation='border' role='status' />
        </div>
      </div>
    )
  } else {
    return (
      <div className='main-content'>
        {dataDishes.map((dish, idx) => {
          return (
            <div className='card-content mt-5' key={idx}>
              <Card>
                <Card.Img variant="top" src={dish.image} alt={dish.name} className='img-fluid' />
                <Card.Body>
                  <Card.Title>{dish.name}</Card.Title>
                  <h4 className='mt-2'>{`${transformPrice(dish.price)}`}</h4>
                </Card.Body>
                <Card.Footer className='card-footer'>
                  <div className="def-number-input number-input" key={idx}>
                    <button onClick={() => decrease()} className="minus"></button>
                    <input className="quantity" name="quantity" value={quantity} type="number" readOnly/>
                    <button onClick={() => increase()} className="plus"></button>
                  </div>
                  <Button variant="warning" size="sm" onClick={() => addDishToCart(dish)} > Add </Button>
                </Card.Footer>
              </Card>
            </div>
          );
        })
        }
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    cart: state.cart
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    addDish: (dishSelected) => addDishToCartAction(dispatch)(dishSelected)
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Menu);
