import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

const initialSignUp = {
  name: "", //text
  email: "", //email
  password: "", //password
};

const useStyles = makeStyles({
  header: {
    height: "12vh",
    maxWidth: "100%",
    background: '#2160A0',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Chonburi',
   },
   headerh3: {
    color: 'white',
    marginLeft: '3%'
   },
   headerLink: {
    marginRight:"3%",
    color: 'white',
    textDecoration: 'none',
    fontFamily: 'Chonburi',
    hover: {
    textDecoration: 'underline'
    }
  },
  loginStyles: {
    margin: '4% auto 3% auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    padding: '5% 0% 5% 0%',
    background: '#E9E9E9',
    borderRadius:'15px',
    lineHeight: '140%',
    letterSpacing: '-0.5px',
    fontFamily: 'Chonburi'
    },
  formh2h3: {
    margin: '1%',
    textAlign: 'center',
    paddingBottom: '2%',
      },
  inputStyles: {
    padding: '4%',
    borderRadius: '5px',
    fontFamily: 'Chonburi',
  },
  buttonStyles: {
    width: '20%',
    background: '#2160A0',
    color: 'white',
    borderRadius: '5px',
    fontFamily: 'Chonburi',
    padding: '1.75%',
    fontSize: '1rem',
    textAlign: 'center',
    marginLeft: '1.5%'
}
})

export default function SignUpInstructor() {

  const classes = useStyles();
  const history = useHistory();

  return (
    <section className="signpInstructor-page"> 
    {/* //onSubmit={onSubmit}> */}
      <div className={classes.header}>
        <h2 className={classes.headerh3}>ANYWHERE FITNESS</h2>
        <Button onClick={() => history.push('/')}  className={classes.headerLink} >HOME</Button>
      </div>
      <form className={classes.loginStyles}>
        <h2 className={classes.formh2h3}>ANYWHERE FITNESS</h2>
        <h3 className={classes.formh2h3}>NEW USER</h3>
        <label>
          <input
            type="text"
            name="name"
            // onChange={onChange}
            // value={signUp.name}
            placeholder="NAME"
            className={classes.inputStyles}
            required
          />
        </label>
        <br />
        <label>
          <input
            type="email"
            name="email"
            // onChange={onChange}
            // value={signUp.email}
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
            // onChange={onChange}
            // value={signUp.password}
            placeholder="PASSWORD"
            className={classes.inputStyles}
            required
          />
        </label>
        <br />
        <button className={classes.buttonStyles}>SIGN UP</button>
        <br />
        <button className={classes.buttonStyles}>CANCEL</button>
      </form>
    </section>
  );
}