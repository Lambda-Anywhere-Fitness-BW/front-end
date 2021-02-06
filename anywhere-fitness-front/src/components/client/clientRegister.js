import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { signUpSubmitClient } from "../../utils/actions/authActions";
import { connect } from "react-redux";
import MarketingHeader from "../../marketing-comp/marketing-header";
import SignUpHeader from "../SignUpHeader";

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
    color: "#6f6b6b",
  },
  buttonStyles: {
    width: "20%",
    background: "#2160A0",
    color: "white",
    borderRadius: "5px",
    fontFamily: "Chonburi",
    padding: "1.75%",
    fontSize: "1rem",
    textAlign: "center",
    marginLeft: "1.5%",
  },
  textStyles: {
    textAlign: "center",
    margin: "5% 0 0 0",
  },
});

const initialSignUp = {
  name: "uzi",
  email: "andy@andy.com",
  password: "1234",
  //!username must be over 5 characters
  username: "liluzivert",
  fitnesslevel: 3,
  location: "SF",
  bio: "I like dogs",
  aviurl: "https://bit.ly/3cFRXW6", // link
};

const ClientRegister = ({ signUpSubmitClient }) => {
  const classes = useStyles();
  const history = useHistory();

  const [form, setForm] = useState(initialSignUp);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("FORM", form);
    signUpSubmitClient(form);
    history.push("/login");
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <section className="signup-page" onSubmit={handleSubmit}>
      <SignUpHeader />
      <form className={classes.loginStyles}>
        <h2 className={classes.formh2h3}>ANYWHERE FITNESS</h2>
        <h3 className={classes.formh2h3}>NEW CLIENT</h3>
        <label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={form.name}
            placeholder="FULL NAME"
            className={classes.inputStyles}
            required
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={form.username}
            placeholder="USERNAME OVER 5 LETTERS"
            className={classes.inputStyles}
            required
          />
        </label>
        <br />
        <label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={form.email}
            placeholder="EMAIL"
            className={classes.inputStyles}
            required
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={form.password}
            placeholder="PASSWORD"
            className={classes.inputStyles}
            required
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="bio"
            onChange={handleChange}
            value={form.bio}
            placeholder="About You"
            className={classes.inputStyles}
            required
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="location"
            onChange={handleChange}
            value={form.location}
            placeholder="Location"
            className={classes.inputStyles}
            required
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="aviurl"
            onChange={handleChange}
            value={form.aviurl}
            placeholder="image link"
            className={classes.inputStyles}
            required
          />
        </label>
        <br />
        <label>
          <p className={classes.textStyles}>Fitness Level</p>
          <select
            name="fitnesslevel"
            className={classes.inputStyles}
            onChange={handleChange}
            value={form.fitnesslevel}
          >
            <option name="fitnesslevel" value="1">
              Beginner
            </option>
            {/* <option name="fitnesslevel" value="2">
              Middle
            </option>
            <option name="fitnesslevel" value="3">
              Expert
            </option> */}
          </select>
        </label>
        <br />
        <button className={classes.buttonStyles}>SIGN UP</button>
        <br />
        <button className={classes.buttonStyles}>CANCEL</button>
      </form>
    </section>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { signUpSubmitClient })(ClientRegister);

// const initialSignUp = {
//   name: "",
//   email: "",
//   password: "", 
//   username: '',
//   credentials: "",
//   specialty: "",
//   yearsexp: "",
//   bio: "",
//   avi_url: "", // link
// };