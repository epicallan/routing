import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

import Home from "./components/home";
import About from "./components/about";
import News from "./components/news";
import Footer from "./components/footer";
import SideNav from "./components/side-nav";

class App extends React.Component {
 
  renderMain(){
    return (
      <div className="container_scroll">
        <SideNav anchors={this.props.anchors} />
          <div className="child">
            <Home />
          </div>
          <div className="child">
            <About />
          </div>
          <div className="child">
            <News />
          </div>
        <Footer />
      </div>
    )
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => this.renderMain()} /> 
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/news" component={News} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch> 
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
