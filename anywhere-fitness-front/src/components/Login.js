import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import axiosWithAuth from "../utils/auth/axiosWithAuth";
import { userLogin } from "../utils/actions/authActions";
import { connect } from "react-redux";

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
  username: "asohrabi",
  password: "owaowa",
};

const Login = ({ userLogin }) => {
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
    userLogin(loginForm);
    history.push("/loading");
    // history.push("/instructor/classes");
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
            value={initialLogin.username}
            // onChange={handleChange}
            required
            className={classes.inputStyles}
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            name="password"
            // onChange={handleChange}
            value={initialLogin.password}
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
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { userLogin })(Login);
