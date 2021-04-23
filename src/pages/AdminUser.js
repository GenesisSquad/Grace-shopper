import { Paper, Grid, TextField, Typography } from "@material-ui/core";
import { Component } from "react";
import { withRouter } from "react-router";
import { callApi } from "../api";
// import { useParams } from "react-router";
import { ColorButton } from "../components";
import "./AccountForm.css";
import User from "./User";
// const {getAllUsers} = require ("../db");

const paperStyle = {
  padding: 20,
  height: "auto",
  width: 280,
  margin: "20px auto",
};

class AdminUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      isAdmin: "false",
    //   action: this.props.action,
      user: this.props.user,
      setUser: this.props.setUser,
    };
    this.emptyState = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      isAdmin: "",
    };
    this.isLoading = false;
    // this.create = this.state.action === "create";
    this.title = this.create ? "Create User" : "Update User";
    this.oppositeTitle = !this.create ? "update" : "create";
    // this.oppositeAction = !this.create ? "update" : "create";
  }

  handleChange = (event) => {
    const a = event.target.value;
    this.setState({ [event.target.name]: a });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { action, username, password, firstName, lastName, email, isAdmin } = this.state;
   
      if (username && password && firstName && lastName && email && isAdmin) {
        try {
          this.isLoading = true;
          const res = await callApi({
            url: "users/:userId",
            method: "PATCH",
            body: {
              username,
              password,
              firstName,
              lastName,
              email,
              isAdmin,
            },
          });
          const updateUser = res;
          const user = this.props.user;
          if (updateUser) {
            this.props.setUser([...user, updateUser]);
            this.props.history.push("/admin");
            console.log("Nicks new user", updateUser)
          }
        } catch (error) {
          console.error(error);
 
        } finally {
          this.setState({ ...this.emptyState });
          this.isLoading = false;
        }

      } else {
        alert("Not all required fields have been filled in");
        return;
      }    
  };

  render() {
    const { action, username, password, firstName, lastName, email, isAdmin } = this.state;
    return (        
      <Grid>
          {/* {getAllUsers()} */}
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center"></Grid>
          <div className="textt">
            <Typography component="h1" variant="h5" className="textt">
              {this.title}
            </Typography>
            <TextField
              disabled={this.isLoading}
              varient="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              value={username}
              autoComplete="username"
              autoFocus
              onChange={this.handleChange}
            />
            <div style={{ display: "flex", flexFlow: "row" }}>
              <TextField
                disabled={this.isLoading}
                varient="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="password"
                name="password"
                value={password}
                autoComplete="password"
                autoFocus
                onChange={this.handleChange}
              />
              <TextField
                style={{ marginLeft: "10px" }}
                disabled={this.isLoading}
                varient="outlined"
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="firstName"
                name="firstName"
                value={firstName}
                autoComplete="firstName"
                autoFocus
                onChange={this.handleChange}
              />
            </div>
            <TextField
              disabled={this.isLoading}
              varient="outlined"
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="lastName"
              name="lastName"
              value={lastName}
              autoComplete="lastName"
              autoFocus
              onChange={this.handleChange}
            />
            <TextField
              disabled={this.isLoading}
              varient="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="email"
              name="email"
              value={email}
              autoComplete="email"
              autoFocus
              onChange={this.handleChange}
            />
            <TextField
              disabled={this.isLoading}
              varient="outlined"
              margin="normal"
              required
              fullWidth
              id="isAdmin"
              label="isAdmin"
              name="isAdmin"
              value={isAdmin}
              autoComplete="isAdmin"
              autoFocus
              onChange={this.handleChange}
            />

            <ColorButton
              disabled={this.isLoading}
              fullWidth
              variant="contained"
              color="secondary"
              style={{ marginTop: "10px" }}
              onClick={this.handleSubmit}
            >
              Submit
            </ColorButton>
            <span
              style={{
                display: "flex",
                flexFlow: "column",
                justifyContent: "center",
              }}
            ></span>
          </div>
        </Paper>
      </Grid>
    );
  }
}

export default withRouter(AdminUser);
