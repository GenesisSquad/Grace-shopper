import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
const ColorButton = withStyles((theme) => ({
	root: {
		fontFamily: "tahoma",
		color: theme.palette.getContrastText("#9B7D46"),
		backgroundColor: "#C0A572",
		"&:hover": {
			backgroundColor: "#9B7D46",
		},
	},
}))(Button);

export default ColorButton;
