import { Link } from "react-router-dom";
import { postQuery } from "./utils";
import React, { useState } from "react";
import SingleQuery from "./SingleQuery";

const example_sents = ["güzel bir filmdi."];

const url = "http://lvh.me:4440/evaluate";

const Sentiment = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await postQuery(url, query);
    setAnswer(response.result);
  };
  return (
    <div>
      <h1>Sentiment Analysis</h1>

      <SingleQuery
        onChange={setAnswer}
        value={answer}
        url={url}
        example_sents={example_sents}
      />
      <div>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Sentiment;
