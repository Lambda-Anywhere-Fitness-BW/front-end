import React from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  BannerGrid: {
    margin: "4% 2% 4% 20%",
  },
  head: {
    fontFamily: "'Chonburi', cursive",
  },
  TextLeft: {
    paddingRight: "4%",
    paddingTop: "5%",
    fontFamily: "'Montserrat', sans-serif",
  },
  headSpan: {
    fontWeight: "bold",
  },
  better: {
    fontFamily: "'Chonburi', cursive",
    paddingLeft: "30%",
  },
});

const Banner = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.BannerGrid}>
        <Grid item className={classes.TextLeft}>
          <Typography variant="h1" className={classes.head}>
            Anywhere <br /> Fitness
          </Typography>
          <Typography variant="h3" className={classes.TextLeft}>
            Fitness any time. <br /> Anyplace. <br />{" "}
            <span className={classes.headSpan}>Anywhere. </span>
          </Typography>
        </Grid>
        <Grid item>
          <img src="../assets/mac-book.svg" />
        </Grid>
      </Grid>
      <Typography variant="h3" className={classes.better}>
        Create a better you from anywhere
      </Typography>
    </div>
  );
};

export default Banner;
