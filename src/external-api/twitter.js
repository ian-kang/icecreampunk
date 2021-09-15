const BASE_URL = "https://api.twitter.com/2";
const bearerToken = process.env.REACT_APP_TWITTER_BEARER_TOKEN;

const searchTweetsURL = "/tweets/search/recent";

const params = {
  query: "nft -is:retweet lang:en",
  max_results: 100,
  "tweet.fields": "created_at,public_metrics",
  expansions: "author_id",
};

const searchTweetsendpoint = urlGenerator(baseURL, searchTweetsURL, params);
getData(searchTweetsendpoint);

function urlGenerator(baseURL, endpoint, params) {
  return baseURL + endpoint + new URLSearchParams(params).toString();
}

async function getData(url) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authentication: bearerToken,
    },
  });
  return response.json(); // Promise
}

async function postData(url, data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
