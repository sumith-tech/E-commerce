import React from "react";
import { MDBCard, MDBCardBody, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { cartSliceAction } from "../Redex/cart-slice";

const CartItem = (props) => {
  const { name, id, price, quantity, totalprice } = props;
  const dispatch = useDispatch();
  const addIntheCartHandler = () => {
    dispatch(
      cartSliceAction.addtoCart({
        name,
        id,
        quantity,
        price,
        totalprice,
      })
    );
  };
  const removeIntheCartHandler = () => {
    dispatch(cartSliceAction.removefromCart(id));
  };
  return (
    <MDBCard className="mb-4 ">
      <MDBCardBody className="p-4">
        <MDBRow className="align-items-center">
          <MDBCol md="3" className="d-flex justify-content-center">
            <div>
              <p className="small text-muted mb-4 pb-2">Name</p>
              <p className="lead fw-normal mb-0">{name}</p>
            </div>
          </MDBCol>
          <MDBCol md="5" className="d-flex justify-content-center">
            <div>
              <p className="small text-muted mb-4 pb-2">Quantity</p>
              <p className="lead fw-normal mb-0">
                {quantity}{" "}
                <span>
                  <Button
                    onClick={addIntheCartHandler}
                    variant="outline-dark"
                    className="px-2 mx-1"
                  >
                    +
                  </Button>
                  <Button
                    onClick={removeIntheCartHandler}
                    variant="outline-dark"
                    className="px-2 mx-1"
                  >
                    -
                  </Button>
                </span>
              </p>
            </div>
          </MDBCol>
          <MDBCol md="2" className="d-flex justify-content-center">
            <div>
              <p className="small text-muted mb-4 pb-2">Price</p>
              <p className="lead fw-normal mb-0">${price}</p>
            </div>
          </MDBCol>
          <MDBCol md="2" className="d-flex justify-content-center">
            <div>
              <p className="small text-muted mb-4 pb-2">Total</p>
              <p className="lead fw-normal mb-0">${totalprice}</p>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default CartItem;
