// import React, {useState} from "react";

// // import { useHistory } from "react-router";
// import Rating from "@material-ui/lab/Rating";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";

// fetchRating = () => {
//     const sum = (acc, currentValue) => acc + currentValue;
//     const ratings = this.props.products.reviews.map(reviewObj => reviewObj.rating)
//       return ratings.reduce(sum) / ratings.length
//   }
//   fetchRating();

// // const displayRating(props, products) => {
// //     return (
// //       <div>
// //         <Box align="left" mb={1} borderColor="transparent">
// //           <Rating
// //             value={props.products.rating}
// //             name="rating"
// //             readOnly="true"
// //           />
// //         </Box>
// //       </div>
// //     )
// //   };
// // displayRating();

// const Ratings = (props, event) => {
//   const [value, setValue] = useState(2);

//   return (
//      <>
//     <div>
//       <Box align="left"  component="fieldset" mb={3} borderColor="transparent">
//         <Typography component="legend">Please rate this product!</Typography>
//         <Rating
//           value={value}
//           name="rating"
//           onChange={(event, newValue) => {
//             setValue(newValue);
//           }}
//           onClick={props.handleInputChange}
//         />
//       </Box>

//     </div>
//     <div>

//         <Box align="left" mb={1} borderColor="transparent">
//           <Rating
//             value={props.products.rating}
//             name="rating"
//             readOnly="true"
//           />
//         </Box>
//       </div>
//       <div>
//       <Card>
//   <CardContent>
//     <Typography variant="h6">
//       Other user's ratings
//     </Typography>
//     <Divider />
//     <Grid container>
//       <Rating
//         value={this.props.ratings.reviews.length >= 1 ? this.fetchRating() : 4.5}
//         name="rating"
//         size="large"
//         precision={0.5}
//         readOnly="true"
//       />
//     </Grid>
//   </CardContent>
// </Card>
//       </div>
//     </>

//   );
// };

// export default Ratings;
