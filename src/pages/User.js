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
    total: "$4",
    datePlaced : "01-32-2023",
    products : [
      {
        inStock: true,
        name: "Nick's DD Brew",
        description: "Nick's interpretation of DUnkin Donuts Coffee",
        category: "COFFEE",
        price: "$4",
        imageURL:
          "https://topsecretrecipes.com/images/product/dunkin-donuts-coolatta-copycat-recipe.jpg",
      },
      {
        inStock: true,
        name: "Bella London Fog",
        description: "Delicious blend of Earl Grey tea with sultry oat milk foam. Notes of lavender and vanilla.",
        category: "TEA",
        price: "$1200",
        imageURL:
          "https://www.splenda.com/wp-content/themes/bistrotheme/assets/recipe-images/london-fog-tea-latte.jpg",
      }
    ]
  },
  {
    id: 2,
    status: "in progress",
    quantity: 2,
    total: "$33",
    datePlaced : "01-12-2020",
    products :[
      {
        inStock: true,
        name: "Capuccino 2.0",
        description: "Delicious foamy cofi",
        category: "Coffee",
        price: "$23",
        imageURL:
          "https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/cappuccino-2029-e80b7c6d318c7862df2c4c8623a11f99@1x.jpg",
      },
      {
        inStock: true,
        name: "Juno's Morning Tea",
        description: "A delicious green tea made from the leaves of Juno's hedge",
        category: "TEA",
        price: "$900",
        imageURL:
          "https://cdn.vox-cdn.com/thumbor/_bow8R4lJX0KrCxxvQZ9bDfve-8=/44x0:755x533/1200x800/filters:focal(44x0:755x533)/cdn.vox-cdn.com/uploads/chorus_image/image/46335946/_MG_0202.0.0.0.jpg",
      },
    ],
  },
  {
    id: 3,
    status: "canceled",
    quantity: 23,
    total: "$42",
    datePlaced : "01-22-2021",
    products: [
      {
        inStock: true,
        name: "joe",
        description: "GREAT COFFEE!",
        category: "COFFEE",
        price: "$22",
        imageURL:
          "https://images.squarespace-cdn.com/content/v1/57b7c57b44024338a6700bdf/1588704248137-5U0TCBQRZCKTVVLM8QUO/ke17ZwdGBToddI8pDm48kA_SSaoz4elkj-HsZd8gX3Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWPwZyNcweDIvdeL5kotwkIXjs9g0WibSO_cU-Ijy4Pwg6poS-6WGGnXqDacZer4yQ/IMG_3607.jpg",
      },
      {
        inStock: true,
        name: "joe",
        description: "GREAT COFFEE!",
        category: "TEA",
        price: "$22",
        imageURL:
          "https://images.squarespace-cdn.com/content/v1/57b7c57b44024338a6700bdf/1588704248137-5U0TCBQRZCKTVVLM8QUO/ke17ZwdGBToddI8pDm48kA_SSaoz4elkj-HsZd8gX3Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWPwZyNcweDIvdeL5kotwkIXjs9g0WibSO_cU-Ijy4Pwg6poS-6WGGnXqDacZer4yQ/IMG_3607.jpg",
      },
    ]
  },
];
function createData(id, status, quantity, total, datePlaced) {
  return { id, status, quantity, total, datePlaced };
}


const Orders = () => {
  const classes = useStyles();
  const history = useHistory();

  const rows = myorders.map((order) => {
    return createData(order.id, order.status, order.quantity, order.total, order.datePlaced);
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
            <TableCell align="right">Total&nbsp;($)(Order subtotal)</TableCell>
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
              <TableCell align="right">{row.total}</TableCell>
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

      <Orders/>
    </>
  );
};

export default User;