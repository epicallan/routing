import React from "react";
import ScrollSnap from "scroll-snap";
import Home from "./home";
import About from "./about";
import News from "./news";
import SideNav from "./side-nav";

const snapConfig = {
  scrollSnapDestination: "0% 90%",
  scrollTimeout: 100,
  scrollTime: 300
};

class App extends React.Component {
  container = React.createRef();

  bindScrollSnap() {
    function callback() {
      // optional callback
    }

    const element = this.container.current;
    const snapObject = new ScrollSnap(element, snapConfig);
    snapObject.bind(callback);
  }

  componentDidMount() {
    this.bindScrollSnap();
  }

  render() {
    return (
      <div id="container" ref={this.container}>
        <SideNav anchors={this.props.anchor} />
        <div className="page first-page">
          <div>
            <Home />
          </div>
          <div className="hint">scroll down ⇣</div>
        </div>
        <div className="page second-page">
          <div>
            <About />
          </div>
        </div>
        <div className="page third-page">
          <div>
            <News />
          </div>
        </div>
        <div className="page fourth-page">
          <div>4</div>
          <div className="hint">scroll up ⇡</div>
        </div>
      </div>
    );
  }
}

export default App;
