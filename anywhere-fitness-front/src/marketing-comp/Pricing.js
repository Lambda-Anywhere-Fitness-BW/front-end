import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  pricesTitle: {
    fontFamily: "'Chonburi', 'cursive'",
    paddingLeft: "30%",
    marginTop: "5rem",
  },
  mainPrice: {
    minHeight: 600,
    margin: "0 2% 0 2%",
    border: "solid 1px black",
    display: "flex",
  },
  top: {
    fontFamily: "'Chonburi', 'cursive'",
    color: "#2160A0",
  },
  box: {
    backgroundColor: "#E1E1E1",
    width: 450,
    borderRadius: "5%",
    justifyContent: "space-between",
    padding: "2rem 3rem 2rem 3rem",
  },
  plan: {
    flexDirection: "column",
  },
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
        {/*main box */}
        <Grid container className={classes.box}>
          {/*left tab box */}
          <Grid item>
            <Typography variant="h3" className={classes.top}>
              FREE
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3" className={classes.top}>
              $0
            </Typography>
          </Grid>
          <Grid container className={classes.plan}>
            <Typography>Plan Includes:</Typography>
            <Grid item>
              <Typography>Browse Classes</Typography>
            </Grid>
            <Grid item>
              <Typography>View Instructors</Typography>
            </Grid>
            <Grid item>
              <Typography>Register and Pay for Classes</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Pricing;
