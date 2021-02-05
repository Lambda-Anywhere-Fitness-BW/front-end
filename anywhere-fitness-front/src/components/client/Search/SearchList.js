import { Typography, Grid, Button, FormHelperText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { ClassDetailsModal } from "./ClassDetails";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "55%",
    marginTop: "10px",
    marginLeft: "10px",
    border: "solid 1px black",
    height: "120px",
    // borderRadius: "15%",
  },
  left: {
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  leftText: {
    fontSize: "18px",
    fontFamily: "'Montserrat', sans-serif",
  },
  middle: {
    width: "70%",
    padding: "5px",
    alignItems: "center",
  },
  middleHead: {
    fontSize: "20px",
    fontFamily: "'Chonburi', cursive",
  },
  instructor: {
    fontSize: "16px;",
    fontFamily: "'Montserrat', sans-serif",
  },
  bio: {
    fontSize: "14px;",
    fontFamily: "'Montserrat', sans-serif",
  },
  right: {
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  date: {
    fontSize: "18px",
    fontFamily: "'Montserrat', sans-serif",
  },
});

const SearchList = () => {
  const classes = useStyles();

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    console.log("click");
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <ClassDetailsModal showModal={showModal} setShowModal={setShowModal} />
      <Grid container className={classes.container}>
        {/*  //main container */}
        <Grid container className={classes.left}>
          {" "}
          {/*  //left box */}
          <Grid item>
            <Typography className={classes.leftText}>3:30 PM</Typography>
            <Typography className={classes.leftText}>60 min</Typography>
            <Typography className={classes.leftText}>5/25 spots</Typography>
          </Grid>
        </Grid>
        {/*  //left box end */}
        <Grid container className={classes.middle}>
          {/*  //middle box */}
          <Grid item>
            <Typography className={classes.middleHead}>
              Beginner Boxing at Loco Motion Studio
            </Typography>
            <Typography className={classes.instructor}>Dan Willy</Typography>
            <Typography className={classes.bio}>
              In this class, you will hit your jabs & straight hooks. You won't
              be Mike Tyson, but you can whoop some butt.
            </Typography>
          </Grid>
        </Grid>
        {/*  //middle box */}
        <Grid container className={classes.right}>
          {/*  //right box */}
          <Grid item>
            <Typography className={classes.date}>02/15/2021</Typography>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={openModal}
            >
              Book
            </Button>
          </Grid>
        </Grid>
        {/*  //right box */}
      </Grid>
      {/*  //main container */}
    </>
  );
};

export default SearchList;
