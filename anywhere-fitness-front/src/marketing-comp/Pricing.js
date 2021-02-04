import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles({
  pricesTitle: {
    fontFamily: "'Chonburi', 'cursive'",
    marginTop: "5rem",
    fontSize: '4rem',
    textAlign: 'center',
    paddingBottom: '5%',
    paddingTop: '2%'
  },
  mainPrice: {
    minHeight: 600,
    margin: "0 2% 0 2%",
    maxWidth: '100%',
    display: "flex",
    justifyContent: 'space-evenly'
  },
  top: {
    fontFamily: "'Chonburi', 'cursive'",
    color: "#2160A0",
    textDecoration: 'underline'
  },
  top2: {
    fontFamily: "'Chonburi', 'cursive'",
    color: "white",
    textDecoration: 'underline'
  },
  box: {
    backgroundColor: "#E1E1E1",
    width: 450,
    borderRadius: "5%",
    justifyContent: "space-between",
    padding: "2rem 3rem 2rem 3rem",
  },
  box2: {
    backgroundColor: "#2160A0",
    width: 450,
    borderRadius: "5%",
    justifyContent: "space-between",
    padding: "2rem 3rem 2rem 3rem",
  },
  plan: {
    flexDirection: "column",
    color: "#2160A0"
  },
  plan2: {
    flexDirection: "column",
    color: 'white',
    fontWeight: 'bold'
  },
  text: {
    padding: '5%',
    fontWeight: 'bold'
  },
  included: {
    padding: '5%',
    fontWeight: 'bold',
    fontSize: '1.5rem'
  },
  buttonStyles: {
    background: '#007DFF'
  }
});

const Pricing = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" className={classes.pricesTitle}>
        Pricing that works for all
      </Typography>
      <Grid container className={classes.mainPrice}>
        {" "}
        <Grid container className={classes.box}>
          <Grid item>
            <Typography variant="h3" className={classes.top}>
              Free
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3" className={classes.top}>
              $0
            </Typography>
          </Grid>
          <Grid container className={classes.plan}>
            <Typography className={classes.included}>Plan Includes:</Typography>
            <Grid item className={classes.text}>
              <Typography>Brows Classes</Typography>
            </Grid>
            <Grid item className={classes.text}>
              <Typography>View Instructors</Typography>
            </Grid>
            <Grid item className={classes.text}>
              <Typography>Register and Pay for Classes</Typography>
            </Grid>
            <Grid item className={classes.text}>
              <Button className={classes.buttonStyles}>Create Account</Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.box2}>
        <Grid item className={classes.text}>
            <Typography variant="h3" className={classes.top2}>
              Pro
            </Typography>
          </Grid>
          <Grid item className={classes.text}>
            <Typography variant="h3" className={classes.top2}>
              $10
            </Typography>
          </Grid>
          <Grid container className={classes.plan2}>
            <Typography className={classes.included}>Plan Includes:</Typography>
            <Grid item className={classes.text}>
              <Typography>Brows Classes</Typography>
            </Grid>
            <Grid item className={classes.text}>
              <Typography>View Instructors</Typography>
            </Grid>
            <Grid item className={classes.text}>
              <Typography>Chat 1:1 with Instructors</Typography>
            </Grid>
            <Grid item className={classes.text}>
              <Typography>Register and Pay for Classes</Typography>
            </Grid>
            <Grid item className={classes.text}>
              <Button className={classes.buttonStyles}>Create Account</Button>
            </Grid>
          </Grid>
      </Grid>
      </Grid>
    </>
  );
};

export default Pricing;