import React from "react";
import withStyles from "react-jss";
import SearchBar from "../SearchBar/SearchBar";
//import searchIcon from "../../Assets/searchIcon.png";

const styles = {
  leftContainer: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "70px 20px 0px 40px",
    background: "#F9F9F9",
    height: "100vh",
  },
  title: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "34px",
    lineHeight: "41px",
    color: "#000000",
    paddingBottom: "50px",
  },
  checkbox: {
    marginTop: "50px",
    height: "20px",
  },
  labelText: {
    paddingLeft: "10px",
  },
  submitButton: {
    marginTop: "50px",
    border: "1px solid #7749F8",
    background: "#7749F8",
    borderRadius: "4px",
    cursor: "pointer",
  },
  buttonText: {
    padding: "10px 20px",
    color: "#ffffff",
    fontWeight: "600",
    fontSize: "16px",
  },
};

const MainPage = ({ classes }) => {
  return (
    <div className={classes.leftContainer}>
      <div className={classes.title}>{"Twitter Listener"}</div>
      <div>{"#hashtag"}</div>
      <SearchBar />
      <div className={classes.checkbox}>
        <input
          type="checkbox"
          id={"include image"}
          value={"include image"}
          readOnly
        ></input>
        <label htmlFor={"include image"} className={classes.labelText}>
          {"must include an image"}
        </label>
      </div>
      <div className={classes.submitButton}>
        <div className={classes.buttonText}>{"Submit"}</div>
      </div>
    </div>
  );
};

export default withStyles(styles)(MainPage);
