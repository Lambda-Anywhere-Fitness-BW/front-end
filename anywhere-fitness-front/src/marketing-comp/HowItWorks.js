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
  TextContainer: {
    width: "45%",
    padding: "3rem",
  },
  Title: {
    fontFamily: "'Montserrat', sans-serif",
  },
  Paragraph: {
    paddingTop: "3rem",
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
            <Typography className={classes.Paragraph}>
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
      <Grid container className={classes.container}>
        <Grid item className={classes.Image}>
          <img src="../assets/lunge-stripe.png"></img>
        </Grid>
        <Grid container className={classes.TextContainer}>
          <Grid item>
            <Typography variant="h3">2. Book Classes</Typography>
            <Typography className={classes.Paragraph}>
              Find the best time suitable for you and book your class! As long
              as there are available spaces in the class, you can reserve your
              spot. Don’t feel locked into a time, either! You can always cancel
              and postpone if necessary! :)
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.container}>
        <Grid container className={classes.TextContainer}>
          <Grid item>
            <Typography variant="h3">3. Get Fit</Typography>
            <Typography className={classes.Paragraph}>
              Using the information provided on Anywhere Fitness, you simply
              show up to your workout at the time & place to get a heart pumpin’
              workout! Show instructors your digital punchpass to get awesome
              benefts for your class!
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.Image}>
          <img src="../assets/row-stripe.png"></img>
        </Grid>
      </Grid>
    </div>
  );
};

export default HowItWorks;
