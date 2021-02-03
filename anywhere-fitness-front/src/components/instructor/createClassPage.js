import React, { useState } from "react";
//import Redux
import { connect } from "react-redux";

//import UI
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { createClass } from "../../utils/actions/userActions";

const useStyles = makeStyles({});

const newClass = {
  name: "Running",
  type: "Yoga",
  start_time: "9:30AM",
  duration: "60 mins",
  intensity_level: 1,
  location: "Pier 69",
  max_size: 12,
};

console.log("HS", newClass);
//added dispatch to this
const CreateClassPage = ({ dispatch, createClass }) => {
  const [classForm, setClassForm] = useState(newClass);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      setClassForm({
        newClass,
        [name]: value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createClass(newClass);
  };

  const classes = useStyles();

  return (
    <section className="create-classForm">
      <div className="main-container">
        {/* container holding all form items */}
        <h1>Create A New Class</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Class Name: </p>
            <input name="name" type="text" required value={newClass.name} />
          </label>

          <label>
            <p>Class Type: </p>
            <div>
              <p>kickboxing</p>
              <input name="kickboxing" type="checkbox" value={newClass.type} />
            </div>

            <div>
              <p>Weight Training</p>
              <input name="weightTraining" type="checkbox" />
            </div>

            <div>
              <p>Yoga</p>
              <input name="yoga" type="checkbox" />
            </div>

            <div>
              <p>Spinning</p>
              <input name="weight" type="checkbox" />
            </div>
          </label>

          <label>
            <p>Start Date:</p>
            <input name="date" type="date" />
          </label>

          <label>
            <p>Start Time:</p>
            <input name="time" type="time" />
          </label>

          <label>
            <p>Duration:</p>
            <select name="duration">
              <option value="">---Select a Duration---</option>
              <option value="30">30 minutes</option>
              <option value="45">45 minutes</option>
              <option value="60">60 minutes</option>
            </select>
          </label>

          <label>
            <p>Intensity Level:</p>
            <select name="intensity" required>
              {/* <option value="">---Select an Intensity--</option>
              <option value="1">1</option>
              <option value="2">2</option> */}
              <option value="3">3</option>
            </select>
          </label>

          <label>
            <p>Location:</p>
            <input
              name="location"
              type="string"
              placeholder='i.e "Iron Fist Gym"'
              required
              value={newClass.location}
            />
          </label>

          <label>
            <p>Max Class Size</p>
            <input
              name="classSize"
              type="number"
              required
              value={newClass.max_size}
            />
          </label>
          <Button variant="outlined" type="submit">
            {" "}
            Create Class
          </Button>
        </form>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  console.log("MSTP", state);
  return {
    classes: state.classes,
  };
};

export default connect(mapStateToProps, { createClass })(CreateClassPage);
