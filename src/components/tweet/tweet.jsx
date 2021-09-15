import React from "react";
import styles from "./tweet.module.css";

const Tweet = ({ data, users }) => {
  return (
    <div className={styles.container}>
      <div className={styles.profileBox}>
        <img
          src="https://pbs.twimg.com/profile_images/1422637130/mccigartrophy_400x400.jpg"
          alt="profile-pic"
          className={styles.picture}
        />
        <div className={styles.name}>{users[data.author_id]["name"]}</div>
        <div className={styles.username}>
          {`@${users[data.author_id]["username"]}`}
        </div>
      </div>
      <div className={styles.textBox}>
        <span className={styles.text}>{data.text}</span>
      </div>
      <div className={styles.countBox}>
        <div className={styles.retweetBox}>
          Retweet Count
          <div className={styles.retweetCount}>
            {data.public_metrics.retweet_count}
          </div>
        </div>
        <div className={styles.replyBox}>
          Reply Count
          <div className={styles.replyCount}>
            {data.public_metrics.reply_count}
          </div>
        </div>
        <div className={styles.likeBox}>
          Like Count
          <div className={styles.likeCount}>
            {data.public_metrics.like_count}
          </div>
        </div>
        <div className={styles.quoteBox}>
          Quote Count
          <div className={styles.quoteCount}>
            {data.public_metrics.quote_count}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tweet;
