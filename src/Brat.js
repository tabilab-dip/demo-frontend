import React from "react";
import $ from "jquery";
import equal from "fast-deep-equal";

//TODO: need to fix this later
const PUBLIC_URL = "http://localhost:3000/";

class Brat extends React.Component {
  constructor(props) {
    super(props);
    this.updateImage = this.updateImage.bind(this);
  }
  componentDidMount() {
    const head_script = document.createElement("script");
    head_script.type = "text/javascript";
    head_script.src = PUBLIC_URL + "brat/head.js";
    head_script.setAttribute("id", "headjs");

    const loader_script = document.createElement("script");
    loader_script.src = PUBLIC_URL + "brat/brat_loader.js";
    loader_script.type = "text/javascript";
    loader_script.setAttribute("id", "loader_script");

    head_script.onload = function () {
      document.body.appendChild(loader_script);
    };

    loader_script.onload = this.updateImage.bind(this);

    document.head.appendChild(head_script);
  }

  componentDidUpdate(prevProps) {
    if (
      !equal(this.props.coll, prevProps.coll) ||
      !equal(this.props.doc, prevProps.doc)
    ) {
      this.updateImage();
    }
  }

  updateImage() {
    let collData = this.props.coll || {};
    let docData = this.props.doc || {};
    window.Util.embed(
      "embedding-entity-example",
      collData,
      docData,
      window.webFontURLs
    );
  }

  componentWillUnmount() {}

  // shouldComponentUpdate() {

  // }

  render() {
    return <div id="embedding-entity-example"></div>;
  }
}

export default Brat;

/*
run the loader part once
useEffect to add the rendering part

*/
