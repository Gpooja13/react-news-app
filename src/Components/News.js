import React, { useEffect, useState } from "react";
import NewsTile from "./NewsTile";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroller";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  const capitalCase = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  document.title = `${capitalCase(props.category)} - NewsBanana`;

  const newsUpdate = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    newsUpdate();
  }, []);

  const loadFunc = async () => {
    if (loading) {
      return;
    }
    setPage((prevPage) => prevPage + 1);
    setLoading(true);

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;

    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles((prev) => [...prev, ...parsedData.articles]);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-center my-3">
        Latest News Feed - {capitalCase(props.category)}
      </h1>
      {loading && <Spinner />}

      <div
        className="container my-3"
        style={{ overflow: "auto" }}
        data-bs-theme="dark"
      >
        <InfiniteScroll
          pageStart={articles.length}
          loadMore={loadFunc}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
          style={{ overflow: "auto" }}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsTile
                      title={element.title ? element.title : ""}
                      description={element.description ? element.description : ""}
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
};

News.defaultProps = {
  country: "in",
  pageSize: "6",
  apiKey: "995df160b89b41f6b99a7e79620fe41b",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
