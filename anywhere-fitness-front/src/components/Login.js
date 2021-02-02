import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  header: {
    height: "12vh",
    maxWidth: "100%",
    background: "#2160A0",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Chonburi",
  },
  headerh3: {
    color: "white",
    marginLeft: "3%",
  },
  headerLink: {
    marginRight: "3%",
    color: "white",
    textDecoration: "none",
    fontFamily: "Chonburi",
    hover: {
      textDecoration: "underline",
    },
  },
  loginStyles: {
    margin: "4% auto 3% auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    padding: "5% 0% 5% 0%",
    background: "#E9E9E9",
    borderRadius: "15px",
    lineHeight: "140%",
    letterSpacing: "-0.5px",
    fontFamily: "Chonburi",
  },
  formh2h3: {
    margin: "1%",
    textAlign: "center",
    paddingBottom: "2%",
  },
  inputStyles: {
    padding: "4%",
    borderRadius: "5px",
    fontFamily: "Chonburi",
  },
  buttonStyles: {
    width: "20%",
    background: "#2160A0",
    color: "white",
    borderRadius: "5px",
    fontFamily: "Chonburi",
    padding: "1.75%",
    fontSize: "1rem",
  },
});

const initialLogin = {
  username: "",
  password: "",
};

export default function Login() {
  const [loginForm, setLoginForm] = useState(initialLogin);

  const classes = useStyles();
  const history = useHistory();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setLoginForm({ ...initialLogin, [name]: value });
    console.log("logintest", loginForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("INSIDE BUTTON CLICK");
    axios
      .post("https://bw44-anywhere-fitness.herokuapp.com/login", loginForm) // ADD ENDPOINT and credentials here
      .then((res) => {
        console.log(res.data.payload);
        localStorage.setItem("token", res.data.payload);
        console.log("props", this.props);
        this.props.history.push("/protected"); // redirects
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="login-page">
      <div className={classes.header}>
        <h3 className={classes.headerh3}>ANYWHERE FITNESS</h3>
        <Button
          onClick={() => history.push("/")}
          className={classes.headerLink}
        >
          HOME
        </Button>
      </div>
      <form className={classes.loginStyles}>
        <h2 className={classes.formh2h3}>ANYWHERE FITNESS</h2>
        <h3 className={classes.formh2h3}>EXISTING USERS</h3>
        <label>
          <input
            type="username"
            name="username"
            placeholder="USERNAME"
            onChange={handleChange}
            required
            className={classes.inputStyles}
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="PASSWORD"
            required
            className={classes.inputStyles}
          />
        </label>
        <br />
        <button onClick={handleSubmit} className={classes.buttonStyles}>
          Login
        </button>
      </form>
    </section>
  );
}
