import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import Modal from "../Modal/Modal";

import CartItem from "./CartItem";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { uisliceAction } from "../Redex/ui-slice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartitems);
  const CloseCartButtonHander = () => {
    dispatch(uisliceAction.triggercart());
  };
  let totalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalPrice += cartItems[i].totalprice;
  }

  return (
    <Modal>
      <section className="vh-100" style={{ zIndex: -1 }}>
        <div className="d-flex justify-content-end p-2">
          <Button variant="danger" onClick={CloseCartButtonHander}>
            X
          </Button>
        </div>
        <MDBContainer className="h-100">
          <MDBRow className="justify-content-center align-items-center  h-100">
            <MDBCol>
              <p>
                <span className="h2">Shopping Cart </span>
                <span className="h4">(1 item in your cart)</span>
              </p>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  totalprice={item.totalprice}
                  quantity={item.quantity}
                />
              ))}

              <MDBCard className="mb-5 text-light bg-dark">
                <MDBCardBody className="p-4">
                  <div className="float-end">
                    <p className="mb-0 me-5 d-flex align-items-center">
                      <span className="small  me-2">
                        Order total:
                      </span>
                      <span className="lead fw-normal">${totalPrice}</span>
                    </p>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <div className="red d-flex justify-content-end pb-3">
                <Button variant="success" onClick={CloseCartButtonHander}>
                  Checkout
                </Button>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </Modal>
  );
};

export default Cart;
