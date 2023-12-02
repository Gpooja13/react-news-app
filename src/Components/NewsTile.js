import React from "react";

const NewsTile =(props)=> {
  const n=250-props.title.length; 
    return (
      <div className="container">
        <div className="card my-3" >
        <span className="badge rounded-pill text-bg-success" style={{ position: "absolute", top: "-9px", zindex: "1"}} >{props.source.name}</span>
          <img src={(props.imageURL)?props.imageURL:"Images/news1.png"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title+props.title.length}</h5>
            <p className="card-text">
            {props.description.length>n?props.description.substring(0,n)+"...":props.description+"..."}
            </p>

            <div className="d-flex justify-content-between align-items-center">
            <small className="text-body-secondary">{new Date(props.publishedAt).toGMTString()}</small>
            <br/>
            <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm my-2">
              Read more
            </a>
            </div>

          </div>
        </div>
      </div>
    );
  }
export default NewsTile