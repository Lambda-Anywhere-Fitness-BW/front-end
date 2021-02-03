import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { signUpSubmitInstructor } from '../../utils/actions/authActions'

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
    color: '#6f6b6b'
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
},
textStyles: {
textAlign: 'center',
margin: '5% 0 0 0',
},
})

const initialSignUp = {
  name: "",
  username: '',
  email: "", 
  password: "", 
  bio: "",
  avi_url: "", // link
  role: 'Instructor'
};

export default function InstructorRegister(props) {

  const classes = useStyles();
  const history = useHistory();

  const [form, setForm] = useState( initialSignUp )

  const handleSubmit = (ev) =>{
    ev.preventDefault();
    signUpSubmitInstructor(form)
    history.push('/login')
    };

  const handleChange = (ev) => {
      //const { name, value } = ev
      setForm({
          ...form,
          [ev.target.name]: ev.target.value
      })
      console.log(form)
  };

  return (
    <section className="signup-page" onSubmit={handleSubmit}> 
      <div className={classes.header}>
        <h2 className={classes.headerh3}>ANYWHERE FITNESS</h2>
        <Button onClick={() => history.push("/")} className={classes.headerLink}>HOME</Button>
      </div>
      <form className={classes.loginStyles}>
        <h2 className={classes.formh2h3}>ANYWHERE FITNESS</h2>
        <h3 className={classes.formh2h3}>NEW USER</h3>
        <label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            // value={signUp.name}
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
            // value={signUp.name}
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
            onChange={handleChange}
            // value={signUp.password}
            placeholder="PASSWORD"
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
            // value={signUp.name}
            placeholder="image link"
            className={classes.inputStyles}
            required
          />
        </label>
        <br />
        <label><p className={classes.textStyles}>Account Type</p>
          <select name='role' className={classes.inputStyles}
          onChange={handleChange} value={form.role}>
            <option name='role' value='Instructor'>Instructor</option>
          </select>
        </label>
        <br />
        <button className={classes.buttonStyles}>SIGN UP</button>
        <br />
        <button className={classes.buttonStyles}>CANCEL</button>
      </form>
    </section>
  );
}