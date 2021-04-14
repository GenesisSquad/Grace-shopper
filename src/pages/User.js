import React from "react";
import { Link, useHistory } from "react-router-dom";
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

const myorders = [
  {
    id: 1,
    status: "completed",
    quantity: 22,
    price: "$4",
  },
  {
    id: 2,
    status: "in progress",
    quantity: 2,
    price: "$33",
  },
  {
    id: 3,
    status: "canceled",
    quantity: 23,
    price: "$42",
  },
];

function createData(id, status, quantity, price) {
  return {id, status, quantity, price} ;
}

const rows = myorders.map((order) => {
  return createData(order.id, order.status, order.quantity, order.price)
});

const Order = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order Number (id)</TableCell>
            <TableCell align="right">Order Status (status)</TableCell>
            <TableCell align="right">Items in cart (Order length)</TableCell>
            <TableCell align="right">Price&nbsp;($)(Order subtotal)</TableCell>
            <TableCell align="right">
              Action&nbsp;(what do you want to do with it)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right"><Button>View Order</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const User = ({ userData, token }) => {
  const history = useHistory();

  if (!token) {
    return (
      <div className="sign-in-message">
        <h1>
          Please <Link to="/login">log in</Link> to view your dashboard
        </h1>
      </div>
    );
  }
  return (
    <>
      <div className="dashboard">
        {
          <h1>
            Hello, {userData ? userData.firstName : <CircularProgress />}!
          </h1>
        }
      </div>
      <Order />
    </>
  );
};

export default User;
