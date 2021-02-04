import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

//moduleImport
import appHeader from "../appHeader";
import MyClassesMain from "../classes/MyClassesMain";

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

const example = [12];

export default function MyPunchPasses({ createPunchpass }) {
  const classes = useStyles();
  const history = useHistory();

  const handlePunchpass = (e) => {
    e.preventDefault();
    createPunchpass();
    history.push("/login/instructor/punchpasses");
  };

  if (example.length === 0) {
    return (
      <Grid container className={classes.noClassBox}>
        <Grid item>
          <Typography className={classes.header} variant="h3">
            Your instructors haven't created a PunchPass.
          </Typography>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid container className={classes.ClassBox}>
        <Grid item className={classes.textBox}>
          <Typography variant="h2" className={classes.header}>
            Name of PunchPass
          </Typography>
          <Typography variant="h3">Number of classes needed</Typography>
          <Typography variant="h5">Class Name: 1,2,3 Boxing</Typography>
          <Typography variant="h5">
            Reward: One free water bottle and protein shaker
          </Typography>
          <Button onClick={handlePunchpass} variant="contained">
            Create PunchPass
          </Button>
        </Grid>
      </Grid>
    );
  }
}
