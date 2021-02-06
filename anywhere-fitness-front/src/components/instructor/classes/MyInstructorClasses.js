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

const example = [45];

export default function MyInstructorClasses({ deleteClass }) {
  const classes = useStyles();
  const history = useHistory();

  //!add onDelete to onclick
  const onDelete = (e) => {
    e.preventDefault();
    deleteClass();
    history.push("/login/instructor/classes");
  };

  if (example.length === 0) {
    return (
      <Grid container className={classes.noClassBox}>
        <Grid item>
          <Typography className={classes.header} variant="h3">
            You haven't created any classes. Click button above to create class.
          </Typography>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid>
        <Grid container className={classes.ClassBox}>
          <Grid item className={classes.textBox}>
            <Typography variant="h2" className={classes.header}>
              Kick-Boxing on Feb 12
            </Typography>
            <Typography variant="h3">Instructor: Daniel Vargas</Typography>
            <Typography variant="h5">Location: K.O. Boxing Gym</Typography>
            <Typography variant="h5">
              Learn the basics of kickboxing with Daniel! You’ll spend 45
              minutes working like you never have!{" "}
            </Typography>
          </Grid>
          <Grid item className={classes.imageBox}>
            <Button onClick={onDelete} variant="contained">
              Delete Class
            </Button>
          </Grid>
        </Grid>

        <Button variant="contained">Create a Class</Button>
      </Grid>
    );
  }
}