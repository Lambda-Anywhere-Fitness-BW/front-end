import React, { useEffect } from "react";

import { getUser } from "../utils/actions/userActions";
import { connect } from "react-redux";

function LoginLoading({ getUser }) {
  useEffect(() => {
    console.log("use effect happened");
    getUser();
  }, []);

  return (
    <div>
      <h1>Loading Screen</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { getUser })(LoginLoading);
