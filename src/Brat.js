import $ from "jquery";
import equal from "fast-deep-equal";
import "./brat_css/style-vis.css";
import React, { useState } from "react";

//TODO: need to fix this later
const PUBLIC_URL = "http://localhost:3000/";

class Brat extends React.Component {
  constructor(props) {
    super(props);
    this.updateImage = this.updateImage.bind(this);
    this.state = { loading: true };
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

    head_script.onload = () => {
      document.body.appendChild(loader_script);
      console.log("Brat header script is loaded");
    };

    loader_script.onload = () => {
      this.setState({ loading: false });
      console.log("Brat loader script is loaded.");
    };

    document.head.appendChild(head_script);
  }

  componentDidUpdate(prevProps) {
    if (
      (!equal(this.props.coll, prevProps.coll) ||
        !equal(this.props.doc, prevProps.doc)) &&
      !this.state.loading
    ) {
      this.updateImage();
    }
  }

  updateImage() {
    // if (this.props.doc == null) {
    //   return;
    // }
    if (typeof window.Util === "undefined") {
      console.log("undef");
      return;
    }

    console.log("Update Image; props:");
    console.log(this.props.doc);
    console.log("-------");
    let collData = this.props.coll || {};
    let docData = this.props.doc || {};

    console.log("Update Image");
    console.log(docData);
    console.log(this.state.loading);

    //window.head.ready(function () {
    window.Util.embed(
      "embedding-entity-example",
      collData,
      docData,
      window.webFontURLs
    );

    //});
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUnmount() {
    this.setState({ loading: true });
    console.log("componentWillUnmount");
    // remove the nodes
  }

  render() {
    return <div id="embedding-entity-example"></div>;
  }
}

export default Brat;

/*
run the loader part once
useEffect to add the rendering part

*/
