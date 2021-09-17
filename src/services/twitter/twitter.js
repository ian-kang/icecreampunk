export default class Twitter {
  async getTweets() {
    const response = await fetch(
      `${process.env.REACT_APP_TWEET_FETCH_URL}/tweet`
    );

    const jsonResponse = await response.json();

    const users = {};
    const authorData = jsonResponse.includes.users;
    authorData.forEach((user) => {
      users[user.id] = { name: user.name, username: user.username };
    });

    return { tweets: jsonResponse.data, users };
  }
}
