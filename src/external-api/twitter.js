export default class TwitterApi {
  BASE_URL = "https://api.twitter.com/2";
  searchTweetsURL = "/tweets/search/recent?";

  constructor(BEARER_TOKEN) {
    this.bearerToken = BEARER_TOKEN;
  }

  async searchTweets(params) {
    const url = this.urlGenerator(this.BASE_URL, this.searchTweetsURL, params);

    console.log(url);

    console.log(`Bearer ${this.bearerToken}`);

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${this.bearerToken}`,
      },
    });
    return await response.json(); // Promise
  }

  urlGenerator(baseURL, endpoint, params) {
    return baseURL + endpoint + new URLSearchParams(params).toString();
  }
}

// const params = {
//   query: "nft -is:retweet lang:en",
//   max_results: 100,
//   "tweet.fields": "created_at,public_metrics",
//   expansions: "author_id",
// };
