import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";


const App = () => 
    <Router>
          <div>
                 <Route exact path="/" component={Home} />
                 <Route exact path="/home" component={Home} />
                 <Route exact path="/navbar" component={NavBar} />
                <Route exact path="/signup" component={SignUp} /> 
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/footer" component={Footer} />
        
          </div>
    </Router>;

export default App;


