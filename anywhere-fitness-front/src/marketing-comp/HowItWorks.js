import React from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    marginTop: "7rem",
    justifyContent: "center",
  },
  TextContainer: {},
  Title: {
    fontFamily: "'Montserrat', sans-serif",
  },
  Image: {
    marginLeft: "3rem",
  },
});

const HowItWorks = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.container}>
        <Grid container className={classes.TextContainer}>
          <Grid item>
            <Typography variant="h3">1. Explore Classes</Typography>
            <Typography>
              Explore a variety of classes from your community. See all
              available times and places in an easy to use design. Find
              information like what kind of class, the difficulty level, the
              instructor information & get mentally ready for a challenge!
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.Image}>
          <img src="../assets/crunch-striped.png"></img>
        </Grid>
      </Grid>
    </div>
  );
};

export default HowItWorks;
