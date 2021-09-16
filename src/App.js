import "./App.css";
import Tweet from "./components/tweet/tweet";
import { demoData } from "./external-api/demoData";

function App({ twitter }) {
  // const params = {
  //   query: "nft -is:retweet lang:en",
  //   max_results: 10,
  //   "tweet.fields": "created_at,public_metrics",
  //   expansions: "author_id",
  // };
  const tweetData = demoData.data;
  const users = {};
  const authorData = demoData.includes.users;
  authorData.forEach((user) => {
    users[user.id] = { name: user.name, username: user.username };
  });
  console.log(users);
  return (
    <div className="app">
      <header>
        <h1 className="neon_text">ICECREAMPUNK</h1>
      </header>

      <article>Influencers' Tweets created in the last 7 days.</article>
      <div className="container">
        {tweetData.map((data) => (
          <Tweet key={data.id} data={data} users={users} />
        ))}
      </div>
    </div>
  );
}

export default App;
