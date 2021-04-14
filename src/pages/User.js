import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, CircularProgress } from "@material-ui/core";

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
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          history.push("/my-orders");
        }}
      >
        My orders
      </Button>
    </>
  );
};

// <div>
// {!token ? (
//   <div className="sign-in-message">
//     <h1>
//       Please <Link to="/login">log in</Link> to view your dashboard
//     </h1>
//   </div>
// ) : (
//   <>
//     <div className="dashboard">{<h1>Hello, {userData.firstName}!</h1>}</div>
//     <Button
//       variant="outlined"
//       color="primary"
//       onClick={() => {
//         history.push("/my-orders");
//       }}
//     >
//       My orders
//     </Button>
//   </>
// )}
// </div>;

export default User;
