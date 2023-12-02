import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Component } from "react";

// function App() {
//"995df160b89b41f6b99a7e79620fe41b"
//"d5e243763a9f4bb6a884a3f9bb902742"
export default class App extends Component {
  pageSize = 6;
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <Router>
          <Navbar title="NewsBanana" />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  pageSize={this.pageSize}
                  key="general"
                  country="in"
                  category="general"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  pageSize={this.pageSize}
                  key="business"
                  country="in"
                  category="business"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  pageSize={this.pageSize}
                  key="entertainment"
                  country="in"
                  category="entertainment"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  pageSize={this.pageSize}
                  key="health"
                  country="in"
                  category="health"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  pageSize={this.pageSize}
                  key="science"
                  country="in"
                  category="science"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  pageSize={this.pageSize}
                  key="sports"
                  country="in"
                  category="sports"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  pageSize={this.pageSize}
                  key="technolog"
                  country="in"
                  category="technology"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
          </Routes>
        </Router>
        <Footer />
      </div>
    );
  }
}
