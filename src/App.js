import Button from "./components/button/button";
import Header from "./components/header/header";
import Tweet from "./components/tweet/tweet";
import styles from "./App.module.css";

import { useState } from "react";
import ImageUpload from "./components/fileUpload/imageUpload";
import CheckItem from "./components/check-item/checkItem";
import Image from "./components/image/image";
import { DATABASE } from "./localData/imageData";

function App({ twitter }) {
  const [tweetData, setTweetData] = useState(null);
  const [itemList, setItemList] = useState([]);

  async function handlePullData() {
    const data = await twitter.getTweets();
    setTweetData({ tweets: data.tweets, users: data.users });
  }

  function addItem(item) {
    setItemList([...itemList, item]);
  }

  function deleteItem(item) {
    const updatedItems = itemList.filter((element) => element !== item);
    setItemList(updatedItems);
  }
  const checkItems = Object.keys(DATABASE);
  return (
    <div className={styles.app}>
      <Header />
      <article>Influencers' Tweets created in the last 7 days.</article>
      <Button text={"Pull Data"} onPullData={handlePullData} />
      <Button text={"None"} />
      <ImageUpload />
      {checkItems.map((item) => (
        <CheckItem text={item} addItem={addItem} deleteItem={deleteItem} />
      ))}

      {itemList.map((item) => (
        <Image item={DATABASE[item]} />
      ))}

      <div className={styles.tweetListBox}>
        {tweetData &&
          tweetData.tweets.map((data) => (
            <Tweet key={data.id} data={data} users={tweetData.users} />
          ))}
      </div>
    </div>
  );
}

export default App;
