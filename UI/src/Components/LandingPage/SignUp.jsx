import { makeStyles } from "@material-ui/core/styles";
import SignupDark from "../../Assets/SignupDark.svg";
import SignupLight from "../../Assets/SignupLight.svg";
import SignUpPage2 from "./SignUpPage2";
import Header from "../header/Header";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
const useStyles = makeStyles({
  mainContDark: {
    height: "100vh",
    backgroundImage: `url(${SignupDark})`,
  },
  mainContLight: {
    height: "100vh",
    backgroundImage: `url(${SignupLight})`,
  },
  heading: {
    fontFamily: "Bebas Neue",
    fontSize: "2.5rem",
    color: "white",
    textAlign: "center",
    marginTop: "3rem",
    letterSpacing: "0.3rem",
  },
  FormContent: {
    display: "flex",
    flexDirection: "column",
    height: "30rem",
    justifyContent: "space-around",
    alignItems: "center",
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
  lightLabel: {
    color: "white",
  },
  darkLabel: {
    color: "black",
  },
  checkbox: {
    marginLeft: "-13.5rem",
    fontSize: "0.7rem",
  },
  LightButton: {
    padding: "0.5rem 4rem",
    outline: "none",
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
const SignUp = () => {
  var [signupbool, setsignupbool] = useState(false);
  const classes = useStyles();
  var theme = useSelector((state) => {
    return state.ThemeChangeReducer.init;
  });
  async function submit() {
    try {
      const response = await axios.post("/signUp", {
        FirstName: document.getElementById("Firstname").value,
        LastName: document.getElementById("Lastname").value,
        Email: document.getElementById("Email").value,
        Password: document.getElementById("Password").value,
      });
      setsignupbool(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div
      className={theme % 2 === 0 ? classes.mainContLight : classes.mainContDark}
    >
      <Header />
      <h1
        className={classes.heading}
        style={theme % 2 === 0 ? { color: "#464f41" } : null}
      >
        Get on board
      </h1>
      {console.log(signupbool)}
      <form className={classes.FormContent}>
        <input
          className={theme % 2 !== 0 ? classes.inputLight : classes.inputDark}
          type="text"
          required="true"
          placeholder="First name"
          id="Firstname"
        />
        <input
          className={theme % 2 !== 0 ? classes.inputLight : classes.inputDark}
          type="text"
          required="true"
          placeholder="Last name"
          id="Lastname"
        />
        <input
          className={theme % 2 !== 0 ? classes.inputLight : classes.inputDark}
          type="email"
          required="true"
          placeholder="Email address"
          id="Email"
        />
        <input
          className={theme % 2 !== 0 ? classes.inputLight : classes.inputDark}
          type="password"
          required="true"
          placeholder="Password"
          id="Password"
        />
        <span className={classes.checkbox}>
          <input name="checkBox" type="checkbox" />

          <label
            className={theme % 2 === 0 ? classes.darkLabel : classes.lightLabel}
          >
            I would like to subscribe to the newsletter
          </label>
        </span>
        <Button
          className={theme % 2 === 0 ? classes.LightButton : classes.DarkButton}
          onClick={submit}
          value="Continue"
          variant="contained"
        >
          Continue
        </Button>
      </form>
    </div>
  );
};
export default SignUp;
