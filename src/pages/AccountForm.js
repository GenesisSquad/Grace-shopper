import {
  Avatar,
  // Container,
  // CssBaseline,
  // makeStyles,
  Paper,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { callApi } from "../api";
// import { useParams } from "react-router";
import { ColorButton } from "../components";
import "./AccountForm.css";

const paperStyle = {
  padding: 20,
  height: "auto",
  width: 280,
  margin: "20px auto",
};
const avatarStyle = { backgroundColor: "#00008B" };
class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPass: "",
      firstName: "",
      lastName: "",
      email: "",
      action: this.props.action,
    };
    this.emptyState = {
      username: "",
      password: "",
      confirmPass: "",
      firstName: "",
      lastName: "",
      email: "",
    };
    this.isLoading = false;
    this.isLogin = this.state.action === "login";
    this.title = this.isLogin ? "login" : "register";
    this.oppositeTitle = !this.isLogin ? "login" : "register";
    this.oppositeAction = !this.isLogin ? "Login" : "Register";
    this.oppositeMessage = !this.isLogin ? "Have an account?" : "New to us?";
  }
  componentDidMount() {
    if (localStorage.getItem("accountForm")) {
      this.setState(JSON.parse(localStorage.getItem("accountForm")));
    } else {
      localStorage.setItem("accountForm", JSON.stringify(this.emptyState));
    }
  }
  // componentWillUnmount() {
  // 	this.setState({ ...this.emptyState });
  // 	//TODO: add something here
  // 	//TODO: fix login async code IDK
  // }
  handleChange = (event) => {
    const a = event.target.value;
    const copy = JSON.parse(localStorage.getItem("accountForm"));
    copy[event.target.name] = a;
    this.setState({ [event.target.name]: a });
    localStorage.setItem("accountForm", JSON.stringify(copy));
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      action,
      password,
      username,
      confirmPass,
      firstName,
      lastName,
      email,
    } = this.state;
    if (action === "register") {
      //register a user
      if (
        password &&
        username &&
        confirmPass &&
        firstName &&
        lastName &&
        email
      ) {
        // all fields are filled in
        if (username.length > 7 && password.length > 7) {
          //password and username are long enough
          if (password === confirmPass) {
            //password is the same as confirm password
            try {
              this.isLoading = true;
              const res = await callApi({
                url: "users/register",
                method: "POST",
                body: {
                  username,
                  password,
                  firstName,
                  lastName,
                  email,
                },
              });
              const data = res;
              const token = data?.token;
              const user = data?.user;
              delete user.password;
              if (token) {
                user.token = token;
                this.props.setToken(token);
                localStorage.setItem("user", JSON.stringify(user));
                localStorage.setItem("token", user.token);
                this.props.history.push("/");
              }
            } catch (error) {
              console.error(error);
              alert("please try a different username");
              return;
            } finally {
              this.setState({ ...this.emptyState });
              localStorage.setItem(
                "accountForm",
                JSON.stringify(this.emptyState)
              );
              this.isLoading = false;
            }
          } else {
            alert("Make sure both password and confirm password fields match");
            return;
          }
        } else {
          alert("username & password length must be greater than 7 characters");
          return;
        }
      } else {
        alert("Not all required fields have been filled in");
        return;
      }
    } else {
      if (password && username) {
        // all fields are filled in
        if (password.length > 7) {
          //password and username are long enough
          try {
            this.isLoading = true;
            const res = await callApi({
              url: "users/login",
              method: "POST",
              body: {
                username,
                password,
              },
            });
            const data = res;
            // console.log(data);
            const token = data?.token;
            // const user = data?.user;
            // delete user.password;
            if (token) {
              // user.token = token;
              this.props.setToken(token);
              // localStorage.setItem("fitness-user", JSON.stringify(user));
              localStorage.setItem("token", token);
              this.props.history.push("/");
            }
          } catch (error) {
            console.error(error);
            alert("incorrect login");
            return;
          } finally {
            // this.setState({ ...this.emptyState });
            localStorage.setItem(
              "accountForm",
              JSON.stringify(this.emptyState)
            );
            this.isLoading = false;
          }
        } else {
          alert("password length must be greater than 7 characters");
          return;
        }
      } else {
        alert("Not all required fields have been filled in");
        return;
      }
    }
  };

  render() {
    const {
      action,
      password,
      username,
      confirmPass,
      firstName,
      lastName,
      email,
    } = this.state;
    return (
      // <Container maxWidth="xs" className="formmm" style={{ minWidth: "20%" }}>
      //   <CssBaseline>
      //     <div className="textt">
      //       <Avatar
      //         variant="square"
      //         className="textt"
      //         src="/images/FT-logo.png"
      //         alt="logo"
      //         style={{ marginBottom: "10px" }}
      //       />
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
          </Grid>
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
              autoComplete="name"
              autoFocus
              onChange={this.handleChange}
            />
            {action === "register" && (
              <>
                <div style={{ display: "flex", flexFlow: "row" }}>
                  <TextField
                    disabled={this.isLoading}
                    varient="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="FirstName"
                    label="first name"
                    name="firstName"
                    value={firstName}
                    autoComplete="name"
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
                    id="lastName"
                    label="last name"
                    name="lastName"
                    value={lastName}
                    autoComplete="name"
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
                  id="email"
                  label="email"
                  name="email"
                  value={email}
                  autoComplete="name"
                  autoFocus
                  onChange={this.handleChange}
                />
              </>
            )}

            <TextField
              disabled={this.isLoading}
              type="password"
              varient="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />

            {action === "register" && (
              <TextField
                disabled={this.isLoading}
                type="password"
                varient="outlined"
                margin="normal"
                required
                fullWidth
                id="confirmPass"
                label="Confirm Password"
                name="confirmPass"
                value={confirmPass}
                onChange={this.handleChange}
              />
            )}
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
            >
              <Link
                disabled={this.isLoading}
                to="#"
                style={{ marginTop: "15px" }}
                onClick={() => {
                  this.props.history.push(`/${this.oppositeAction}`);
                }}
              >
                {this.oppositeMessage} {this.oppositeAction} here!
              </Link>
              <Link
                disabled={this.isLoading}
                style={{
                  display: "flex",
                  marginTop: "10px",
                  justifyContent: "center",
                }}
                to="#"
                onClick={() => {
                  this.props.history.push(`/`);
                }}
              >
                Continue as guest
              </Link>
            </span>
          </div>
          {/* </CssBaseline>
      </Container> */}
        </Paper>
      </Grid>
    );
  }
}

export default withRouter(AccountForm);
