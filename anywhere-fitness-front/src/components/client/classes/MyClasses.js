import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  noClassBox: {
    border: "solid 1px black",
    margin: "1rem 2rem 1rem 2rem ",
    justifyContent: "space-evenly",
    padding: "5%",
    backgroundColor: "#F5F5F5",
    display: "flex",
  },
  ClassBox: {
    border: "solid 1px black",
    margin: "1rem 2rem 1rem 2rem ",
    justifyContent: "space-evenly",
    backgroundColor: "#F5F5F5",
    padding: "2rem",
  },
  header: {
    fontFamily: "Chonburi",
  },
  textBox: {
    fontFamily: "'Montserrat', sans-serif",
  },
  imageBox: {
    flexDirection: "column",
    padding: "5%",
  },
}));

export default function AppHeader() {
  const classes = useStyles();
  const history = useHistory();

  //*If the classes state is empty, show the box
  return (
    <>
      {/* //no classes */}
      <Grid container className={classes.noClassBox}>
        <Grid item>
          <Typography className={classes.header} variant="h3">
            You haven't signed up for any classes.
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained">Browse classes</Button>
        </Grid>
      </Grid>
      {/* //with classes */}
      <Grid container className={classes.ClassBox}>
        <Grid item className={classes.textBox}>
          <Typography variant="h2" className={classes.header}>
            Name of the punchpass
          </Typography>
          <Typography variant="h3">Number of classes required</Typography>
          <Typography variant="h5">Class Name: </Typography>
          <Typography variant="h5">
            Reward: Learn the basics of kickboxing with Daniel! You’ll spend 45
            minutes working like you never have!{" "}
          </Typography>
        </Grid>
        <Grid item className={classes.imageBox}>
          <Button variant="contained">Change Class</Button>
        </Grid>
        {/* <Grid container class>
          <Grid item>
            <img></img>
            <Button variant="contained">Change Class</Button>
          </Grid>
        </Grid> */}
      </Grid>
    </>
  );
}
