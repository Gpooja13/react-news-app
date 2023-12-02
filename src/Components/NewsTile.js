import React, { Component } from "react";

export default class NewsTile extends Component {

  render() {
    return (
      <div className="container">
        <div className="card my-3" >
        <span className="badge rounded-pill text-bg-success" style={{ position: "absolute", top: "-9px", zindex: "1"}} >{this.props.source.name}</span>
          <img src={(this.props.imageURL)?this.props.imageURL:"Images/news1.png"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">
            {this.props.description}
            </p>
            <small className="text-body-secondary">{new Date(this.props.publishedAt).toGMTString()}</small>
            <br/>
            <a href={this.props.url} target="_blank" rel="noreferrer" className="btn btn-light btn-sm my-2">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
