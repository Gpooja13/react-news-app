import React, { useEffect, useState } from "react";
import NewsTile from "./NewsTile";
import Spinner from "./Spinner";
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
    const url = `https://newsdata.io/api/1/news?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&size=${props.pageSize}&language=${props.language}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.results);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setPage(parsedData.nextPage);
  };

  useEffect(() => {
    newsUpdate();
  }, []);

  const loadFunc = async () => {
    if (loading) {
      return;
    }
    setLoading(true);

    const url = `https://newsdata.io/api/1/news?country=${props.country}&language=${props.language}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&size=${props.pageSize}`;

    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles((prev) => [...prev, ...parsedData.results]);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      setPage(parsedData.nextPage);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-center pos">
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
              {Array.isArray(articles) &&
                articles.map((element) => (
                  <div className="col-md-4" key={element.article_id}>
                    <NewsTile
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      image_url={element.image_url}
                      link={element.link}
                      pubDate={element.pubDate}
                      source_id={element.source_id}
                    />
                  </div>
                ))}
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
  category: "top",
  language: "en",
  apiKey: process.env.REACT_APP_NEWS_API,
};

// News.propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
// };

export default News;
