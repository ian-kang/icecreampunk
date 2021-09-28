import Button from "../button/button";
import Tweet from "./tweet";
import styles from "./tweets.module.css";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function Tweets({ twitter }) {
  const [tweetData, setTweetData] = useState(null);
  const [progress, setProgress] = useState(undefined);

  async function handlePullData() {
    setProgress("on");
    const data = await twitter.getTweets();
    setTweetData({ tweets: data.tweets, users: data.users });
    setProgress(undefined);
  }

  return (
    <div className={styles.body}>
      <article className={styles.article}>
        Influencers' Tweets created in the last 7 days.
      </article>
      <div className={styles.button}>
        <Button text={"Pull Data"} onClick={handlePullData} />
      </div>
      {progress ? (
        <Spinner animation="grow" variant="light" />
      ) : (
        <div className={styles.tweetListBox}>
          {tweetData &&
            tweetData.tweets.map((data) => (
              <Tweet key={data.id} data={data} users={tweetData.users} />
            ))}
        </div>
      )}
    </div>
  );
}

export default Tweets;
