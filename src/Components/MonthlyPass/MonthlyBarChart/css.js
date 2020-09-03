import { makeStyles } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
    height: "40px"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  dropdown: {
    backgroundColor: "#00BBDC",
    color: "white",
    width: "130px",
    height: "40px",
    borderColor: "#00BBDC",
    boder: "1px solid #00BBDC",
    borderRadius: "50px",
    // border: "0px",
    outline: "0px",
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      height: "35px"
    }
  },
  title: {
    marginTop: "-20px",
    marginLeft: "20px",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      marginTop: "-20px"
    }
  },
  discription: {
    fontSize: "15px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px"
    }
  }
}));
