import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <div>
      <Router>
        <Navbar
          title="NewsBanana"
        />
        <Routes>
          <Route
            exact
            path="/react-news-app/"
            element={
              <News
                pageSize={pageSize}
                key="top"
                country="in"
                category="top"
                language="en"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/react-news-app/business"
            element={
              <News
                pageSize={pageSize}
                key="business"
                country="in"
                category="business"
                language="en"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/react-news-app/entertainment"
            element={
              <News
                pageSize={pageSize}
                key="entertainment"
                country="in"
                category="entertainment"
                language="en"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/react-news-app/health"
            element={
              <News
                pageSize={pageSize}
                key="health"
                country="in"
                category="health"
                language="en"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/react-news-app/politics"
            element={
              <News
                pageSize={pageSize}
                key="politics"
                country="in"
                category="politics"
                language="en"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/react-news-app/science"
            element={
              <News
                pageSize={pageSize}
                key="science"
                country="in"
                category="science"
                language="en"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/react-news-app/sports"
            element={
              <News
                pageSize={pageSize}
                key="sports"
                country="in"
                category="sports"
                language="en"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/react-news-app/technology"
            element={
              <News
                pageSize={pageSize}
                key="technolog"
                country="in"
                category="technology"
                language="en"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/react-news-app/world"
            element={
              <News
                pageSize={pageSize}
                key="world"
                country="in"
                category="world"
                language="en"
                apiKey={apiKey}
              />
            }
          ></Route>

        </Routes>
      </Router>
      <Footer />
    </div>
  );
};
export default App;
