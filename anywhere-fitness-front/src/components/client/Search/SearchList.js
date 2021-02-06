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
  bookButton: {
    zIndex: 1,
  },
});

const dummyClasses = [
  {
    id: "",
    name: "Boxing with Pam",
    type: null,
    start_time: "8:30 PM",
    duration: "60 Mins",
    intensity_level: 2,
    location: "Stockton, CA",
    max_size: 10,
  },
  {
    id: "",
    name: "Yoga Tuesdays",
    type: null,
    start_time: "8:00 AM",
    duration: "60 Mins",
    intensity_level: 3,
    location: "Maker Park",
    max_size: 10,
  },
  {
    id: "",
    name: "Big League Stretching",
    type: null,
    start_time: "5:30 PM",
    duration: "60 mins",
    intensity_level: 1,
    location: "Big Boy Park",
    max_size: 10,
  },
  {
    id: "",
    name: "Hardcore HiiT",
    type: null,
    start_time: "7:00 AM",
    duration: "60 mins",
    intensity_level: 3,
    location: "Rocker Gym",
    max_size: 20,
  },
];

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
      {dummyClasses.map((sessions, i) => {
        return (
          <Grid container key={i} className={classes.container}>
            {/*  //main container */}
            <Grid container className={classes.left}>
              {" "}
              {/*  //left box */}
              <Grid item>
                <Typography className={classes.leftText}>
                  {sessions.start_time}
                </Typography>
                <Typography className={classes.leftText}>
                  {sessions.duration}
                </Typography>
                <Typography className={classes.leftText}>
                  {sessions.max_size} spots
                </Typography>
              </Grid>
            </Grid>
            {/*  //left box end */}
            <Grid container className={classes.middle}>
              {/*  //middle box */}
              <Grid item>
                <Typography className={classes.middleHead}>
                  {sessions.name} at {sessions.location}
                </Typography>
                {/* <Typography className={classes.instructor}>{dummyClasses[0].max_size}</Typography> */}
                {/* <Typography className={classes.bio}>
              In this class, you will hit your jabs & straight hooks. You won't
              be Mike Tyson, but you can whoop some butt.
            </Typography> */}
              </Grid>
            </Grid>
            {/*  //middle box */}
            <Grid container className={classes.right}>
              {/*  //right box */}
              <Grid item>
                <Typography className={classes.date}>No date </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={openModal}
                  className={classes.bookButton}
                >
                  Book
                </Button>
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};

export default SearchList;
