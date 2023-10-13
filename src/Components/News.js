import React, { Component } from "react";
import NewsTile from "./NewsTile";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';


export default class News extends Component {

  static defaultProps={
    country:"in",
    pageSize:"6",
    apiKey:"995df160b89b41f6b99a7e79620fe41b"
  }

  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number
  }

  capitalCase=(s)=>{
return s.charAt(0).toUpperCase()+s.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: false
    };
    document.title=`${this.capitalCase(this.props.category)} - NewsBanana`;
  }

  async newsUpdate(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
  }

  async componentDidMount() {
    this.newsUpdate();
  }

  handlePrev = async () => {
  await this.setState({
        page: this.state.page - 1
      });
      this.newsUpdate();
  };

  handleNext = async () => {
   await this.setState({
      page: this.state.page + 1
    });
   this.newsUpdate();
  };

  render() {
    return (
      <>
        <div className="container" data-bs-theme="dark">
          <h1 className="text-center my-3">Latest News Feed - {this.capitalCase(this.props.category)}</h1>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsTile
                    title={element.title}
                    description={element.description}
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
        <div className="container d-flex justify-content-around">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrev}
          >
            &larr;Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next&rarr;
          </button>
        </div>
      </>
    );
  }
}
