import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { courseNames, fullnames } from "./Data";

const SelectMenu = ({day,setDay,courseName,setCourseName}) => {
  const handleChange = (event) => {
    setCourseName(event.target.value);
    localStorage.setItem("courseName", JSON.stringify(event.target.value));
  };
  return (
    <div
      style={{
        padding: "1vh 1vw",
        height: "10vh",
        width: "100vw",
        display: "flex",
      }}
    >
      <FormControl variant="filled">
        <InputLabel>Subjects</InputLabel>
        <Select
          style={{ height: "8vh", width: "48vw" }}
          multiple
          value={courseName}
          onChange={handleChange}
          renderValue={(selected) => selected.join(", ")}
        >
          {courseNames.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={courseName.indexOf(name) > -1} />
              <ListItemText
                primary={`${name} - ${fullnames[courseNames.indexOf(name)]}`}
              />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel>Day</InputLabel>
        <Select
          style={{ height: "8vh", width: "48vw", marginLeft: "1vw" }}
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
          label="day"
        >
          <MenuItem value="all">All Days</MenuItem>
          <MenuItem value={"sunday"}>Sunday</MenuItem>
          <MenuItem value={"monday"}>Monday</MenuItem>
          <MenuItem value={"tuesday"}>Tuesday</MenuItem>
          <MenuItem value={"wednesday"}>Wednesday</MenuItem>
          <MenuItem value={"thursday"}>Thursday</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectMenu;
