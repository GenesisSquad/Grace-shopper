import { Paper, Grid, TextField, Typography } from "@material-ui/core";
import { Component } from "react";
import { withRouter } from "react-router";
import { callApi } from "../api";

import { ColorButton } from "../components";
import "./AccountForm.css";


const paperStyle = {
  padding: 20,
  height: "auto",
  width: 280,
  margin: "20px auto",
};

class AdminProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      category: "",
      price: "",
      imageURL: "",
      action: this.props.action,
      products: this.props.products,
      setProducts: this.props.setProducts,
    };
    this.emptyState = {
      name: "",
      description: "",
      category: "",
      price: "",
      imageURL: "",
    };
    this.isLoading = false;
    this.create = this.state.action === "create";
    this.title = this.create ? "Create Product" : "Update Product";
    this.oppositeTitle = !this.create ? "update" : "create";
    this.oppositeAction = !this.create ? "update" : "create";
  }

  handleChange = (event) => {
    const a = event.target.value;
    this.setState({ [event.target.name]: a });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { action, name, description, category, price, imageURL } = this.state;
    if (action === "create") {
      if (name && description && category && price && imageURL) {
        try {
          this.isLoading = true;
          const res = await callApi({
            url: "products",
            method: "POST",
            body: {
              name,
              description,
              category,
              price,
              imageURL,
            },
          });
          const newProduct = res;
          const products = this.props.products;
          if (newProduct) {
            this.props.setProducts([...products, newProduct]);
            this.props.history.push("/products");
          }
        } catch (error) {
          console.error(error);
 
        } finally {
          this.setState({ ...this.emptyState });
          this.isLoading = false;
        }
      }

    } else {
      if (name && description && category && price && imageURL) {
        try {
          this.isLoading = true;
          const res = await callApi({
            url: "products/:productId",
            method: "PATCH",
            body: {
              name,
              description,
              category,
              price,
              imageURL,
            },
          });
          const data = res;

          const token = data?.token;

          if (token) {
            this.props.setToken(token);
            localStorage.setItem("token", token);
            this.props.history.push("/");
          }
        } catch (error) {
          console.error(error);
          alert("incorrect login");
          return;
        } finally {
          this.isLoading = false;
        }

      } else {
        alert("Not all required fields have been filled in");
        return;
      }
    }
  };

  render() {
    const {

       name, description, category, price, imageURL } = this.state;
    return (

      <Grid>
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
              id="name"
              label="name"
              name="name"
              value={name}
              autoComplete="name"
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
                id="category"
                label="category"
                name="category"
                value={category}
                autoComplete="category"
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
                id="price"
                label="price"
                name="price"
                value={price}
                autoComplete="price"
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
              id="description"
              label="description"
              name="description"
              value={description}
              autoComplete="description"
              autoFocus
              onChange={this.handleChange}
            />
            <TextField
              disabled={this.isLoading}
              varient="outlined"
              margin="normal"
              required
              fullWidth
              id="imageURL"
              label="imageURL"
              name="imageURL"
              value={imageURL}
              autoComplete="image url"
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

export default withRouter(AdminProduct);

