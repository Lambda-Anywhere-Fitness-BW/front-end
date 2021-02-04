import React from "react";
import { makeStyles, TextField, Button } from "@material-ui/core";

//module imports
import AppHeader from "../../client/appHeader";

const useStyles = makeStyles({
  main: {
    background: "#E9E9E9",
    border: "2px solid #2160A0",
    borderRadius: "15px",
    margin: "5% 10% 5% 10%",
    padding: "2% 4% 2% 4%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    fontFamily: "Chonburi",
  },
  title: {
    color: "#2160A0",
    textAlign: "center",
    fontSize: "1.5rem",
  },
  formStyles: {
    width: "100%",
  },
  indivForm: {
    width: "25%",
    margin: "2%",
    fontSize: "1.25rem",
  },
  inputs: {
    padding: "5%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "2%",
  },
  buttonPlacement: {
    display: "flex",
    justifyContent: "center",
  },
  buttonStyles: {
    background: "#2160A0",
    color: "white",
    padding: "1.5%",
    fontFamily: "Chonburi",
    "&:hover": {
      color: "#2160A0",
    },
  },
  textStyles: {
    display: "block",
    fontFamily: "Chonburi",
    fontSize: "1.15rem",
  },
});

export default function CreatePunchPass() {
  const classes = useStyles();

  return (
    <>
      <AppHeader />
      <section className="page-container">
        <div className={classes.main}>
          <div className={classes.title}>
            <h1>New PunchPass</h1>
          </div>

          <form className={classes.formStyles}>
            <div className={classes.container}>
              <TextField
                required
                label="PunchPass Name"
                variant="outlined"
                name="name"
                placeholder="Enter Name"
                className={classes.indivForm}
              />

              <label className={classes.indivForm}>
                <p className={classes.textStyles}>Punch Number</p>
                <input
                  name="punches"
                  type="number"
                  className={classes.inputs}
                />
              </label>
              <br />
              <br />

              <TextField
                required
                label="Class Type"
                name="classType"
                variant="outlined"
                placeholder="Enter Class"
                className={classes.indivForm}
              />
              <br />
              <br />

              <TextField
                required
                name="reward"
                variant="outlined"
                label="Reward"
                placeholder="Enter Reward"
                className={classes.indivForm}
              />
            </div>
            <div className={classes.buttonPlacement}>
              <Button className={classes.buttonStyles}>Add PunchPass</Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
