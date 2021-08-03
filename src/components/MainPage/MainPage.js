import React, { useState, useEffect } from "react";
import withStyles from "react-jss";
import request from "request-promise";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

const host = "http://localhost:5000";

//import searchIcon from "../../Assets/searchIcon.png";

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "row",
  },
  leftContainer: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "70px 20px 0px 40px",
    background: "#F9F9F9",
    height: "100vh",
  },
  rightContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "70%",
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

const MainPage = ({ classes }) => {
  let [hashtag, sethashtag] = useState("");
  let [tweets, setTweets] = useState([]);
  let searchedtag = "";
  let handleInput = (e) => {
    searchedtag = e.target.value;
  };

  const submit = async (e) => {
    sethashtag(searchedtag);
  };

  let getTweets = async (tag) => {
    console.log(tag);
    const body = tag ? await request.get(`${host}/tweets/${tag}`) : null;
    const result = JSON.parse(body);
    return result;
  };

  useEffect(() => {
    getTweets(hashtag).then((data) => {
      console.log(data);
      if (data && data.statuses.length > 0) return setTweets(data.statuses);
    });
  }, [hashtag]);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftContainer}>
        <div className={classes.title}>{"Twitter Listener"}</div>
        <div>{"#hashtag"}</div>
        <div onChange={(e) => handleInput(e)}>
          <input
            className={classes.searchBar}
            //value={keyword}
          />
        </div>
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
          <div onClick={(e) => submit(e)} className={classes.buttonText}>
            {"Submit"}
          </div>
        </div>
      </div>
      <div className={classes.rightContainer}>
        {tweets && tweets.length > 0
          ? tweets.map((tweet) => {
              return <TwitterTweetEmbed tweetId={tweet.id_str} />;
            })
          : null}
      </div>
    </div>
  );
};

export default withStyles(styles)(MainPage);
