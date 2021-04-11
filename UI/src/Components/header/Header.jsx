import Logo from "../../Assets/Logo2.svg";
import { makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import ThemechangeAction from "../../Actions/ThemechangeAction";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles({
  Hamburger: {
    position: "absolute",
    left: "1rem",
    top: "1.6rem",
  },
  HeaderCont: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "transparent",
  },
  Night: {
    position: "absolute",
    right: "1rem",
    top: "1.6rem",
    color: "black",
    "&:hover": {
      color: "pink",
    },
  },
  Light: {
    position: "absolute",
    right: "1rem",
    top: "1.6rem",
    color: "white",
    "&:hover": {
      color: "#ffc93c",
    },
  },
});

const Header = () => {
  const classes = useStyles();
  const theme = useSelector((state) => {
    return state.ThemeChangeReducer.init;
  });
  // const HamState = useSelector((state) => {
  //   return state.HamClicked.init;
  // });
  var disp = useDispatch();
  const themechanger = () => {
    disp(ThemechangeAction());
    if (theme % 2 !== 0) {
      document.body.style.background = "white";
    } else {
      document.body.style.background = "black";
    }
  };
  return (
    <div className={classes.HeaderCont}>
      <a href="#">
        <MenuIcon
          style={theme % 2 === 0 ? { color: "black" } : { color: "white" }}
          fontSize="large"
          className={classes.Hamburger}
        />
        <img className={classes.Logo} src={Logo} />
        {theme % 2 === 0 ? (
          <Brightness4Icon
            onClick={themechanger}
            fontSize="large"
            className={classes.Night}
          />
        ) : (
          <Brightness7Icon
            onClick={themechanger}
            fontSize="large"
            className={classes.Light}
          />
        )}
      </a>
    </div>
  );
};
export default Header;
