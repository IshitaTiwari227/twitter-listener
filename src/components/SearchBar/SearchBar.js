import React from "react";
import withStyles from "react-jss";
//import searchIcon from "../../Assets/searchIcon.png";

const styles = {
  searchBar: {
    marginTop: "20px",
    width: "25rem",
    background: "#FFFFFF",
    border: "1px solid #dddddd",
    padding: "0.7rem",
    color: "#979797",
    fontFamily: "Rubik",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    height: "48px",
    "@media only screen and (max-width: 600px) ": {
      width: "19rem",
      fontSize: "12px",
    },
  },
};

const SearchBar = ({ classes }) => {
  return (
    <div>
      <input
        className={classes.searchBar}
        //value={keyword}
      />
    </div>
  );
};

export default withStyles(styles)(SearchBar);
