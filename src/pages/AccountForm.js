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
      action: this.props.action,
    };
    this.emptyState = {
      username: "",
      password: "",
      confirmPass: "",
    };
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
    const { action, password, username, confirmPass } = this.state;
    if (action === "register") {
      //register a user
      if (password && username && confirmPass) {
        // all fields are filled in
        if (username.length > 7 && password.length > 7) {
          //password and username are long enough
          if (password === confirmPass) {
            //password is the same as confirm password
            try {
              const result = await fetch(
                `https://fitness-tracker-back-end.herokuapp.com/api/users/${action}`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ username, password }),
                }
              );
              const data = await result.json();
              const token = data?.token;
              const user = data?.user;
              delete user.password;
              if (token) {
                user.token = token;
                this.props.setToken(token);
                localStorage.setItem("user", JSON.stringify(user));
                localStorage.setItem("token", user.token);
                this.props.history.push("/home");
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
            }
          } else {
            alert("Make sure both password and confirm password fields match");
            return;
          }
        } else {
          alert(
            "Make sure username and password length is greater than 7 characters"
          );
          return;
        }
      } else {
        alert("Not all required fields have been filled in");
        return;
      }
    } else {
      if (password && username) {
        // all fields are filled in
        if (username.length > 7 && password.length > 7) {
          //password and username are long enough
          try {
            const result = await fetch(
              `https://fitness-tracker-back-end.herokuapp.com/api/users/${action}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
              }
            );
            const data = await result.json();
            // console.log(data);
            const token = data?.token;
            // const user = data?.user;
            // delete user.password;
            if (token) {
              // user.token = token;
              this.props.setToken(token);
              // localStorage.setItem("fitness-user", JSON.stringify(user));
              localStorage.setItem("fitness-token", token);
              this.props.history.push("/home");
            }
          } catch (error) {
            console.error(error);
            alert("incorrect login");
            return;
          } finally {
            // this.setState({ ...this.emptyState });
            localStorage.setItem(
              "accountForm-FitnessTrackr",
              JSON.stringify(this.emptyState)
            );
          }
        } else {
          alert(
            "Make sure both username and password length is greater than 7 characters"
          );
          return;
        }
      } else {
        alert("Not all required fields have been filled in");
        return;
      }
    }
  };

  render() {
    const { action, password, username, confirmPass } = this.state;
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
            <TextField
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
              <div
                to="#"
                style={{ marginTop: "15px" }}
                onClick={() => {
                  this.props.history.push(`/${this.oppositeAction}`);
                }}
              >
                {this.oppositeMessage}
                <Link style={{ textDecoration: "none" }}>
                  {" "} {this.oppositeAction} here!
                </Link>
              </div>              
              <Link
                style={{
                  display: "flex",
                  marginTop: "10px",
                  textDecoration: "none",
                  justifyContent: "center"
                }}
                to="#"
                onClick={() => {
                  this.props.history.push(`/home`);
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
