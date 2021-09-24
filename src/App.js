import Header from "./components/header/header";
import Tweets from "./components/tweet/Tweets";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Icecream from "./components/icecream/Icecream";
import Home from "./components/home/Home";
import styles from "./App.module.css";

function App({ twitter }) {
  return (
    <div className={styles.app}>
      <Router>
        <div className={styles.header}>
          <Link to="/">
            <Header />
          </Link>
        </div>

        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/tweets">
          <Tweets twitter={twitter} />
        </Route>
        <Route exact path="/icecream">
          <Icecream />
        </Route>
      </Router>
    </div>
  );
}

export default App;
