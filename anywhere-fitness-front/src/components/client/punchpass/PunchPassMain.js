import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

//moduleImport

import MyPunchPasses from "../punchpass/MyPunchPasses";
import AppHeader from "../../appHeader";

export default function PunchPassMain() {
  //*If the classes state is empty, show the box
  return (
    <>
      <AppHeader />
      <MyPunchPasses />
    </>
  );
}
