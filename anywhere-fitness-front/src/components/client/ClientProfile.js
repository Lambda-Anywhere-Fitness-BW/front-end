import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Radio } from "@material-ui/core";

import AppHeader from "../appHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: "#2160A0",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  HeaderButton: {
    margin: "0 2% 0 2%",
  },
  formStyles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "3%",
  },
  imgStyles: {
    width: "35%",
    marginLeft: "2.5%",
    borderRadius: "150px",
  },
  formInputs: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    marginBottom: "2%",
  },
  input: {
    margin: "5%",
    marginRight: "50%",
    padding: "3%",
    borderRadius: "10px",
    fontSize: "1.25rem",
  },
  input2: {
    margin: "5%",
    padding: "5%",
    borderRadius: "10px",
    fontSize: "1.25rem",
    marginLeft: "5%",
  },
  formRadios: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginLeft: "80%",
  },
  textStylingRadios: {
    padding: "0",
    margin: "3%",
    marginLeft: "100%",
    width: "100%",
    color: "rgb(0, 0, 0, 60%)",
    textAlign: "center",
  },
  textStylingInputs: {
    padding: "0",
    margin: "1%",
    marginLeft: "15%",
    color: "rgb(0, 0, 0, 60%)",
    textAlign: "center",
  },
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <>
      <AppHeader />
      <div className={classes.root}>
        <section className="profile-page">
          <form className={classes.formStyles}>
            <div id="aviurl" className={classes.formInputs}>
              <img
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt=""
                className={classes.imgStyles}
              />
              {/* <input name='aviurl' type='file' /> */}
            </div>
            <div className={classes.formInputs}>
              <label>
                <p className={classes.textStylingInputs}>Full name</p>
                <input name="name" type="text" className={classes.input} />
              </label>
              <label>
                <p className={classes.textStylingInputs}>Email</p>
                <input name="email" type="email" className={classes.input} />
              </label>
              <label>
                <p className={classes.textStylingInputs}>Location</p>
                <input
                  name="location"
                  type="text"
                  placeholder="City, State"
                  className={classes.input2}
                />
              </label>
              <label>
                <p className={classes.textStylingInputs}>Bio</p>
                <textarea name="bio" className={classes.input2} />
              </label>
              <div>
                <label className={classes.formInputs}>
                  <p className={classes.textStylingRadios}>Fitness Level </p>
                  <div className={classes.formRadios}>
                    <Radio value="1" color="primary" />
                    <span>Beginner</span>
                  </div>
                  <div className={classes.formRadios}>
                    <Radio value="2" color="primary" />
                    <span>Intermediate</span>
                  </div>
                  <div className={classes.formRadios}>
                    <Radio value="3" color="primary" />
                    <span>Expert</span>
                  </div>
                  <p className={classes.textStylingRadios}>
                    What's your fitness level?
                  </p>
                </label>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
