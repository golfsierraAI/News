import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Header from "../header/Header";
import { Button } from "@material-ui/core";
import SignupDark from "../../Assets/SignupDark.svg";
import SignupLight from "../../Assets/SignupLight.svg";
const useStyles = makeStyles({
  mainContDark: {
    height: "100vh",
    backgroundImage: `url(${SignupDark})`,
  },
  mainContLight: {
    height: "100vh",
    backgroundImage: `url(${SignupLight})`,
  },
  FormContent: {
    display: "flex",
    flexDirection: "column",
    height: "20rem",
    justifyContent: "space-around",
    alignItems: "center",
  },
  heading: {
    fontFamily: "Bebas Neue",
    fontSize: "3rem",
    textAlign: "center",
    marginTop: "5rem",
    letterSpacing: "0.7rem",
  },
  welcometext: {
    paddingTop: "1rem",
    fontSize: "1rem",
    fontFamily: "'Montserrat', sans-serif",
  },
  inputLight: {
    width: "30rem",
    outline: "none",
    height: "2rem",
    fontFamily: "montserrat",
    border: "none",
    color: "white",
    borderBottom: "0.1rem solid white",
    backgroundColor: "transparent",
    "&::placeholder": {
      color: "white",
    },
  },
  inputDark: {
    width: "30rem",
    outline: "none",
    height: "2rem",
    fontFamily: "montserrat",
    border: "none",
    color: "black",
    borderBottom: "0.1rem solid black",
    backgroundColor: "transparent",
    "&::placeholder": {
      color: "black",
    },
  },
  LightButton: {
    padding: "0.5rem 4rem",
    margin: "2rem 0",
    fontSize: "1.2rem",
    backgroundColor: "#9ddfd3",
    boxShadow: "none",
  },
  DarkButton: {
    padding: "0.5rem 4rem",
    margin: "2rem 0",
    fontSize: "1.2rem",
    color: "white",
    backgroundColor: "#3c415c",
    "&:hover": {
      backgroundColor: "#301b3f",
    },
  },
});
const Login = () => {
  const classes = useStyles();
  var theme = useSelector((state) => {
    return state.ThemeChangeReducer.init;
  });
  return (
    <div
      className={theme % 2 === 0 ? classes.mainContLight : classes.mainContDark}
    >
      <Header />
      <h1
        style={theme % 2 === 0 ? { color: "black" } : { color: "white" }}
        className={classes.heading}
      >
        Welcome Back
      </h1>

      <form
        action="http://localhost:8080/signUp"
        className={classes.FormContent}
        method="post"
      >
        <h3
          className={classes.welcometext}
          style={theme % 2 === 0 ? { color: "black" } : { color: "white" }}
        >
          Welcome back! Login to access the news that you love
        </h3>
        <input
          className={theme % 2 !== 0 ? classes.inputLight : classes.inputDark}
          id="UserId"
          required="true"
          name="name"
          placeholder="Username"
          type="email"
        />
        <br />
        <input
          id="Password"
          className={theme % 2 !== 0 ? classes.inputLight : classes.inputDark}
          placeholder="Password"
          name="password"
          required="true"
          type="password"
        />
        <br />
        <Button
          className={theme % 2 === 0 ? classes.LightButton : classes.DarkButton}
          type="submit"
          variant="contained"
        >
          Log in
        </Button>
      </form>
    </div>
  );
};
export default Login;
