import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: "#2160A0",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  HeaderButton: {
    margin: "0 2% 0 2%",
  },
}));

export default function MarketingHeader() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            Anywhere Fitness
          </Typography>
          <Button className={classes.HeaderButton} color="inherit">
            How it works
          </Button>
          <Button className={classes.HeaderButton} color="inherit">
            Pricing
          </Button>
          <Button className={classes.HeaderButton} color="inherit">
            FAQs
          </Button>

          {/* ADD onClick + Routes here */}
          <Button onClick={() => history.push('/login')} className={classes.HeaderButton} color="inherit">
            Log-in
          </Button>
          <Button onClick={() => history.push('/register')} className={classes.HeaderButton} color="inherit">
            Sign-Up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
