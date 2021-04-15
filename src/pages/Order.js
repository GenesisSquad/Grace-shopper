import React from "react";
import { useHistory } from "react-router";
import {
  Button,
  CircularProgress,
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

function createData(orderId, productId, product, price, quantity) {
  return { orderId, productId, product, price, quantity };
}

// const rows = [createData("coffee", 159, 6.0)];

// export default function BasicTable() {

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
              ORDER ID
            </TableCell>
            <TableCell component="th" scope="row">
              PRODUCT ID
            </TableCell>
            <TableCell component="th" scope="row">
              PRODUCT
            </TableCell>
            <TableCell align="right">QUANTITY</TableCell>
            <TableCell align="right">PRICE</TableCell>
          </TableRow>
          {/* ))} */}
        </TableBody>
        <Button
          onClick={() => {
            console.log("edit button here");
          }}
          variant="contained"
          color="secondary"
        >
          Edit Order
        </Button>{" "}
        <Button
          onClick={() => {
            console.log("cancel button here");
          }}
          variant="contained"
          color="secondary"
        >
          Cancel Order
        </Button>{" "}
      </Table>
    </TableContainer>
  );
};

export default Order;
