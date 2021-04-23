import React from "react";
import { useHistory } from "react-router";
import {
  Button,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const orderProducts = {
  id: 3,
  productId: 3,
  orderId: 1,
  price: "$3",
  quantity: 3,
};


const Order = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Button
        onClick={() => {
          history.push("/account");
        }}
      >
        ← Back to orders
      </Button>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order Id</TableCell>
            <TableCell>Product Id </TableCell>
            <TableCell>Product</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => ( */}
          <TableRow>
            <TableCell component="th" scope="row">
              {orderProducts.orderId}
            </TableCell>
            <TableCell component="th" scope="row">
              {orderProducts.productId}
            </TableCell>
            <TableCell component="th" scope="row">
              PRODUCT
            </TableCell>
            <TableCell align="right">{orderProducts.quantity}</TableCell>
            <TableCell align="right">{orderProducts.price}</TableCell>
          </TableRow>
          {/* ))} */}
        </TableBody>
      </Table>
      <Button
          onClick={() => {
          }}
          variant="contained"
          color="secondary"
        >
          Edit Order
        </Button>{" "}
        <Button
          onClick={() => {
          }}
          variant="contained"
          color="secondary"
        >
          Cancel Order
        </Button>{" "}
    </TableContainer>
  );
};

export default Order;
