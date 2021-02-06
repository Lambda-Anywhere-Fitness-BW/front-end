import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { signUpSubmitInstructor } from '../../utils/actions/authActions'
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
<<<<<<< HEAD
  name: "mr john smith",
  email: "jsmith@yahoo.com",
  password: "1234", 
  username: 'jsmith',
  credentials: "sexy",
  specialty: "pumping",
  yearsexp: "5",
  bio: "live laugh love",
  avi_url: "https://bit.ly/39N4vsX", // link
};

const InstructorRegister = ({ signUpSubmitInstructor }) => {

=======
  name: "Ruben",
  email: "ra15@outlook.com",
  password: "1234",
  username: "Ruby1",
  credentials: "Bachelors in Buff credential",
  specialty: "Fuckin speciality",
  yearsexp: 2,
  bio: "Me much buff",
  aviurl: "www.google.com",
};

const InstructorRegister = ({ signUpSubmitInstructor }) => {
>>>>>>> be72de009bf72f44b013c6930e85dbf89d92f41e
  const classes = useStyles();
  const history = useHistory();

  const [form, setForm] = useState(initialSignUp);

  const handleSubmit = (ev) => {
    ev.preventDefault();
<<<<<<< HEAD
    console.log('clicked submit')
    signUpSubmitInstructor(form)
    console.log('after sign up instructor fn called')
    history.push('/login')
    };

  const handleChange = (ev) => {
      const { name, value } = ev
      setForm({
          ...form,
          [name]: ev.target.value
      })
      console.log(form)
=======
    signUpSubmitInstructor(form);
    history.push("/login");
  };

  const handleChange = (ev) => {
    //const { name, value } = ev
    setForm({
      ...form,
      [ev.target.name]: ev.target.value,
    });
    console.log(form);
>>>>>>> be72de009bf72f44b013c6930e85dbf89d92f41e
  };

  return (
    <section className="signup-page" onSubmit={handleSubmit}>
      <div className={classes.header}>
        <h2 className={classes.headerh3}>ANYWHERE FITNESS</h2>
        <Button
          onClick={() => history.push("/")}
          className={classes.headerLink}
        >
          HOME
        </Button>
      </div>
      <form className={classes.loginStyles} onSubmit={signUpSubmitInstructor}>
        <h2 className={classes.formh2h3}>ANYWHERE FITNESS</h2>
        <h3 className={classes.formh2h3}>NEW INSTRUCTOR</h3>
        <label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
<<<<<<< HEAD
            value={form.name}
=======
            value={initialSignUp.name}
>>>>>>> be72de009bf72f44b013c6930e85dbf89d92f41e
            placeholder="FULL NAME"
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
            name="username"
            onChange={handleChange}
<<<<<<< HEAD
            value={form.username}
            placeholder="USERNAME OVER 5 LETTERS"
            className={classes.inputStyles}
            required
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="credentials"
            onChange={handleChange}
            value={form.credentials}
            placeholder="credentials"
            className={classes.inputStyles}
            required
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="specialty"
            onChange={handleChange}
            value={form.specialty}
            placeholder="specialty"
            className={classes.inputStyles}
            required
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="yearsexp"
            onChange={handleChange}
            value={form.yearsexp}
            placeholder="yearsexp"
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
            name="aviurl"
            onChange={handleChange}
            value={form.avi_url}
            placeholder="image link"
            className={classes.inputStyles}
            required
          />
        </label>
        
       
        {/* <label>
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
=======
            value={initialSignUp.username}
>>>>>>> be72de009bf72f44b013c6930e85dbf89d92f41e
            placeholder="USERNAME"
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
<<<<<<< HEAD
            value={form.email}
=======
            value={initialSignUp.email}
>>>>>>> be72de009bf72f44b013c6930e85dbf89d92f41e
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
<<<<<<< HEAD
            value={form.password}
=======
            value={initialSignUp.password}
>>>>>>> be72de009bf72f44b013c6930e85dbf89d92f41e
            placeholder="PASSWORD"
            className={classes.inputStyles}
            required
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="credentials"
            onChange={handleChange}
<<<<<<< HEAD
            value={form.credentials}
=======
            value={initialSignUp.credentials}
>>>>>>> be72de009bf72f44b013c6930e85dbf89d92f41e
            placeholder="credentials"
            className={classes.inputStyles}
            required
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="specialty"
            onChange={handleChange}
<<<<<<< HEAD
            value={form.specialty}
            placeholder="specialty"
            className={classes.inputStyles}
            required
          />
=======
            value={initialSignUp.specialty}
            placeholder="Speciality"
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
            value={initialSignUp.bio}
            placeholder="About You"
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
            value={initialSignUp.aviurl}
            placeholder="An image"
            className={classes.inputStyles}
            required
          />
        </label>
        <br />
        <label>
          <p className={classes.textStyles}>Years of Experience</p>
          <select
            name="yearsexp"
            className={classes.inputStyles}
            onChange={handleChange}
            value={form.yearsexp}
          >
            <option name="yearsexp" value="1">
              1
            </option>
          </select>
>>>>>>> be72de009bf72f44b013c6930e85dbf89d92f41e
        </label>
        <br />
        <label>
          <input
            type="number"
            step="1"
            name="yearsexp"
            onChange={handleChange}
            value={form.yearsexp}
            placeholder="yearsexp"
            className={classes.inputStyles}
            required
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="avi_url"
            onChange={handleChange}
            value={form.avi_url}
            placeholder="image link"
            className={classes.inputStyles}
            required
          />
        </label> */}
        <br />
        <button className={classes.buttonStyles}>SIGN UP</button>
        <br />
        <button onClick={() => history.push('/')} className={classes.buttonStyles}>CANCEL</button>
      </form>
    </section>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { signUpSubmitInstructor })(
  InstructorRegister
);
