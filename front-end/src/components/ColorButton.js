import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
const ColorButton = withStyles((theme) => ({
  root: {
    fontFamily: "tahoma",
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    "&:hover": {
      backgroundColor: deepOrange[700],
    },
  },
}))(Button);

export default ColorButton;
