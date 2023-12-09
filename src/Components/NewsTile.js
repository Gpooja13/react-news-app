import React from "react";

const NewsTile = (props) => {
  const n = 245 - props.title.length;

  return (
    <div className="container">
      <div className="card my-3">
        <span
          className="badge rounded-pill text-bg-success"
          style={{ position: "absolute", top: "-9px", zindex: "1" }}
        >
          {props.source_id}
        </span>
        <img
          src={props.image_url ? props.image_url : "Images/news1.png"}
          className="card-img-top"
          alt="URL not found"
          style={{ height: "30vh" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>

          <p className="card-text">
            {(props.description)?(props.description.length > n
              ? props.description.substring(0, n) + "..."
              : props.description):(props.content.length>n?props.content.substring(0, n) + "..."
              : props.content)}
          </p>

          <div className="d-flex justify-content-between align-items-center">
            <small className="text-body-secondary">
              {new Date(props.pubDate).toGMTString()}
            </small>
            <br />
            <a
              href={props.link}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-sm my-2"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsTile;
