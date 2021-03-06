import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { removeClass } from "../../../utils/actions/userActions";
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

//!Example state. Need to bring in state from global state
const example = [12];

export default function AppHeader({ removeClass }) {
  const classes = useStyles();
  const history = useHistory();

  const handleRemove = (e) => {
    e.preventDefault();
    removeClass();
    history.push("/login/client/classes");
  };

  //*If the classes state is empty, show the box

  if (example.length === 0) {
    return (
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
    );
  } else {
    return (
      <Grid container className={classes.ClassBox}>
        <Grid item className={classes.textBox}>
          <Typography variant="h2" className={classes.header}>
            Kick-Boxing on Feb 12
          </Typography>
          <Typography variant="h3">Instructor: Daniel Vargas</Typography>
          <Typography variant="h5">Location: K.O. Boxing Gym</Typography>
          <Typography variant="h5">
            Learn the basics of kickboxing with Daniel! You’ll spend 45 minutes
            working like you never have!{" "}
          </Typography>
        </Grid>
        <Grid item className={classes.imageBox}>
          <Button onClick={handleRemove} variant="contained">
            Remove Class
          </Button>
        </Grid>
        {/* <Grid container class>
      <Grid item>
        <img></img>
        <Button variant="contained">Change Class</Button>
      </Grid>
    </Grid> */}
      </Grid>
    );
  }
}

//   return (
//     <>

//       {/* //no classes */}
//       <Grid container className={classes.noClassBox}>
//         <Grid item>
//           <Typography className={classes.header} variant="h3">
//             You haven't signed up for any classes.
//           </Typography>
//         </Grid>
//         <Grid item>
//           <Button variant="contained">Browse classes</Button>
//         </Grid>
//       </Grid>

//       {/* //with classes */}
//       <Grid container className={classes.ClassBox}>
//         <Grid item className={classes.textBox}>
//           <Typography variant="h2" className={classes.header}>
//             Kick-Boxing on Feb 12
//           </Typography>
//           <Typography variant="h3">Instructor: Daniel Vargas</Typography>
//           <Typography variant="h5">Location: K.O. Boxing Gym</Typography>
//           <Typography variant="h5">
//             Learn the basics of kickboxing with Daniel! You’ll spend 45 minutes
//             working like you never have!{" "}
//           </Typography>
//         </Grid>
//         <Grid item className={classes.imageBox}>
//           <Button onClick={handleRemove} variant="contained">
//             Remove Class
//           </Button>
//         </Grid>
//         {/* <Grid container class>
//           <Grid item>
//             <img></img>
//             <Button variant="contained">Change Class</Button>
//           </Grid>
//         </Grid> */}
//       </Grid>
//     </>
//   );
