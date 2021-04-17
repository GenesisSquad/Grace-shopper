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

// const userOrders =[ {id: 3, status: "created", userId: 3, datePlaced: "2021-04-16T00:17:01.955Z", products: Array(2)},
// {id: 4, status: "cancelled", userId: 3, datePlaced: "2021-07-16T00:17:01.955Z", products: Array(10)}
// ]

function createData(
  id,
  status,
  quantity,
  // total,
  datePlaced
) {
  return {
    id,
    status,
     quantity,
    //  total,
    datePlaced,
  };
}

const Orders = ({userOrders}) => {
  const classes = useStyles();
  const history = useHistory();

  const rows = userOrders.map((order) => {
    return createData(
      order.id,
      order.status,
      order.products.length,
      // order.total,
      order.datePlaced
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order Number (id)</TableCell>
            <TableCell align="right">Order Status (status)</TableCell>
            <TableCell align="right">Items in cart (Order length)</TableCell>
            <TableCell align="right">Date placed</TableCell>
            {/* <TableCell align="right">Total&nbsp;($)(Order subtotal)</TableCell> */}
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
              <TableCell align="right">{row.datePlaced}</TableCell>
              {/* <TableCell align="right">{row.total}</TableCell> */}
              <TableCell align="right">
                <Button
                  onClick={() => {
                    history.push(`/orders/${row.id}`);
                  }}
                  variant="contained"
                  color="secondary"
                >
                  View Order
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const User = ({ userOrders, userData, token }) => {
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
      {userOrders.datePlaced}
      <Orders userOrders={userOrders} />
    </>
  );
};

export default User;
