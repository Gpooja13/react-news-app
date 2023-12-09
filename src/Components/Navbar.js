import React,{useState} from 'react';
import {Link} from "react-router-dom";
import Time from "./Time";

const Navbar =(props)=> {
  // const [text, setText] = useState("");
  // const [search, setSearch] = useState("");

  // const getText = (e) => {
  //   setText(e.target.value);
  // };

  // const submitSearch = (e) => {
  //   e.preventDefault();
  //   setSearch(text);
  //   console.log(search);
  // };
  
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid" >
        <Link className="navbar-brand mx-5"  to="/react-news-app/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item mx-2" >
              <Link className="nav-link" aria-current="page" to="/react-news-app/">Home</Link>
            </li>

           <li className="nav-item mx-2">
              <Link className="nav-link" to="/react-news-app/business">Business</Link>
            </li>
           <li className="nav-item mx-2">
              <Link className="nav-link" to="/react-news-app/entertainment">Entertainment</Link>
            </li>
           <li className="nav-item mx-2">
              <Link className="nav-link" to="/react-news-app/health">Health</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/react-news-app/politics">Politics</Link>
            </li>
           <li className="nav-item mx-2">
             <Link className="nav-link" to="/react-news-app/science">Science</Link>
            </li>
           <li className="nav-item mx-2">
              <Link className="nav-link" to="/react-news-app/sports">Sports</Link>
            </li>
           <li className="nav-item mx-2">
              <Link className="nav-link" to="/react-news-app/technology">Technology</Link>
            </li>
           <li className="nav-item mx-2">
              <Link className="nav-link" to="/react-news-app/world">World</Link>
            </li>
            <li className="nav-item" style={{marginLeft:"15vw"}}>
              <Time/>
            </li>
          </ul>


          {/* <div className="d-flex" role="search" >
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={getText}/>
       <Button to="search">Search</Button> 
      </div> */}


        </div>
      </div>
    </nav>
    </div>
    )
  }
export default Navbar;
