import { useState } from "react";
import "./App.css";
import Tweet from "./components/tweet/tweet";

function App() {
  const [tweetData, setTweetData] = useState(null);

  async function onPullData() {
    console.log("Pull Data clicked!");
    const response = await (
      await fetch(`${process.env.REACT_APP_TWEET_FETCH_URL}/tweet`)
    ).json();
    console.log(response);

    const users = {};
    const authorData = response.includes.users;
    authorData.forEach((user) => {
      users[user.id] = { name: user.name, username: user.username };
    });
    setTweetData({ tweets: response.data, users });
    console.log(users);
  }

  return (
    <div className="app">
      <header>
        <h1 className="neon_text">ICECREAMPUNK</h1>
      </header>

      <article>Influencers' Tweets created in the last 7 days.</article>
      <button className="getTweet" onClick={onPullData}>
        Pull Data
      </button>
      <div className="container">
        {tweetData &&
          tweetData.tweets.map((data) => (
            <Tweet key={data.id} data={data} users={tweetData.users} />
          ))}
      </div>
    </div>
  );
}

export default App;
