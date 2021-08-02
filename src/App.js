import React from "react";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import request from "request-promise";
import { useEffect } from "react";

const host = "http://localhost:5000";

function App() {
  const getTweets = async (hashtag) => {
    const body = await request.get(`${host}/tweets/${hashtag}`);
    const result = JSON.parse(body);
    return result;
  };

  useEffect(() => {
    getTweets("iamatraveler").then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
