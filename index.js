const express = require("express");
const path = require("path");
const cors = require("cors");
let app = express();
const promise = require("request-promise");
const bodyParser = require("body-parser");
const PORT = 5000;

app.use(cors());
app.options("*", cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "build")));

const BearerToken =
  "AAAAAAAAAAAAAAAAAAAAADekSAEAAAAAdJymMzD5gNFrgZwF%2Bkl0CbiIg2c%3DBdZtHie5epcUKOiWdxZSKrIBB3XQdVDSo5yC4OR2CbGTj9wLls";

const getTweets = async (hashtag) => {
  let options = {
    url: `https://api.twitter.com/1.1/search/tweets.json?q=%23${hashtag}&include_entities=true`,
    headers: {
      "User-Agent": "client",
    },
    auth: {
      bearer: BearerToken,
    },
  };

  const tweets = await promise(options)
    .then(function (response) {
      return JSON.parse(response);
    })
    .catch(function (err) {
      console.log("error", err);
    });
  return tweets;
};

app.get("/tweets/:hashtag", async (req, res) => {
  const hashtag = req ? req.params.hashtag : null;
  const tweets = await getTweets(hashtag);
  res.send(tweets);
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Listening on port" + PORT);
});
