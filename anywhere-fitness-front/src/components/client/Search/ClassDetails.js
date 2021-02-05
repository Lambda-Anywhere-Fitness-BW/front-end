import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";

import { addClass } from "../../../utils/actions/userActions";

const useStyles = makeStyles({
  box: {
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.8)",
    display: "flex",
    position: "fixed",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "300px",
    height: "300px",
    boxShadow: "0 5px 16px rgba(0,0,0,0.2)",
    background: "#fff",
    color: "#000",
    // display: "grid",
    // gridTemplateColumns: "1fr 1fr",
    position: "relative",
    zIndex: 10,
    borderRadius: "10px",
  },
  modalContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: 1.2,
    color: "#141414",
  },
  p: {
    marginBottom: "1rem",
  },
  button: {
    padding: "10px 24px",
    background: "#141414",
    color: "#fff",
    border: "none",
  },
});

export const ClassDetailsModal = ({ showModal, setShowModal, addClass }) => {
  const classes = useStyles();
  const modalRef = useRef();

  //   const handleAdd = () => {
  //     addClass(class)
  //   }

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Esacape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Grid className={classes.box} ref={modalRef} onClick={closeModal}>
          <Grid className={classes.modal} showModal={showModal}>
            <Grid className={classes.modalContent}>
              <h1>Beginner Boxing</h1>
              <h3>Loco Studio</h3>
              <h3>02/15/2021</h3>
              <p>60 mins</p>

              <Button onClick={() => {}} variant="contained">
                Join Now
              </Button>
            </Grid>
          </Grid>
        </Grid>
      ) : null}
    </>
  );
};
