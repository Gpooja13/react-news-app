import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div>
    <Router>
    <Navbar title="NewsBanana"/>
    <Routes>
          <Route exact path="/" element={<News pageSize={6} key="general" country="in" category="general" apiKey="995df160b89b41f6b99a7e79620fe41b"/>}></Route>
          <Route exact path="/business" element={<News pageSize={6} key="business" country="in" category="business" apiKey="995df160b89b41f6b99a7e79620fe41b"/>}></Route>
          <Route exact path="/entertainment" element={<News pageSize={6} key="entertainment" country="in" category="entertainment" apiKey="995df160b89b41f6b99a7e79620fe41b"/>}></Route>
          <Route exact path="/health" element={<News pageSize={6} key="health" country="in" category="health" apiKey="995df160b89b41f6b99a7e79620fe41b"/>}></Route>
          <Route exact path="/science" element={<News pageSize={6} key="science" country="in" category="science" apiKey="995df160b89b41f6b99a7e79620fe41b"/>}></Route>
          <Route exact path="/sports" element={<News pageSize={6} key="sports" country="in" category="sports" apiKey="995df160b89b41f6b99a7e79620fe41b"/>}></Route>
          <Route exact path="/technology" element={<News pageSize={6} key="technolog" country="in" category="technology" apiKey="995df160b89b41f6b99a7e79620fe41b"/>}></Route>
        </Routes>
        
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
