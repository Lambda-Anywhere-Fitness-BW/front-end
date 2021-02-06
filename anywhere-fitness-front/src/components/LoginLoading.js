import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Backdrop, CircularProgress, Typography } from "@material-ui/core";

import { getUser } from "../utils/actions/userActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

//
const useStyles = makeStyles({
  backdrop: {
    zIndex: 5,
    color: "#fff",
  },
});

function LoginLoading({ getUser, role }) {
  const classes = useStyles();
  const history = useHistory();
  useEffect(() => {
    console.log("use effect happened");
    getUser();
  }, []);

  //! if role=instructor, history.push('/instructor/classes'), if role=client, history.push('/client/classes')

  // if (role === "Instructor") {
  //   history.push("/instructor/classes`");
  // }

  return (
    <>
      <Backdrop className={classes.backdrop} open={true}>
        <CircularProgress color="black" />
      </Backdrop>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    role: state,
  };
};

export default connect(mapStateToProps, { getUser })(LoginLoading);
