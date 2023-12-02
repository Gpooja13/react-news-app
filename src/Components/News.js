import React, { Component } from "react";
import NewsTile from "./NewsTile";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroller";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: "6",
    apiKey: "995df160b89b41f6b99a7e79620fe41b",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };

  capitalCase = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: true,
      totalResults: 0,
    };
    document.title = `${this.capitalCase(this.props.category)} - NewsBanana`;
  }

  async newsUpdate() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.newsUpdate();
  }

loadFunc = async () => {
  // Prevent calling loadFunc if already in a loading state
  if (this.state.loading) {
    return;
  }
  this.setState((prev) => ({
    // page: prev.page + 1,
    page: this.state.page + 1,
    loading: true,
  }));
  console.log(this.state.page);
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  try {
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState((prev) => ({
      articles: [...prev.articles, ...parsedData.articles],
      totalResults: parsedData.totalResults,
      loading: false,
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle error state if needed.
    this.setState({ loading: false });
  }
};


  render() {
    return (
      <>
        <h1 className="text-center my-3">
          Latest News Feed - {this.capitalCase(this.props.category)}
        </h1>
        {this.state.loading && <Spinner />}

        <div
          className="container my-3"
          style={{ overflow: "auto" }}
          data-bs-theme="dark"
        >
          <InfiniteScroll
            pageStart={this.state.articles.length}
            loadMore={this.loadFunc}
            hasMore={this.state.articles.length < this.state.totalResults}
            loader={<Spinner />}
            style={{ overflow: "auto" }}
          >
            {/* !== */}
            <div className="container">
              <div className="row">
                {this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsTile
                        title={element.title ? element.title : ""}
                        description={
                          element.description ? element.description : ""
                        }
                        imageURL={element.urlToImage}
                        url={element.url}
                        publishedAt={element.publishedAt}
                        source={element.source}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}
