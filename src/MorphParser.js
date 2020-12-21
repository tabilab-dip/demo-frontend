import { Link } from "react-router-dom";
import { postQuery } from "./utils";
import React, { useState } from "react";
import SingleQuery from "./SingleQuery";
const url = "http://lvh.me:4441/evaluate";

const example_sents = ["şekerleri yedim."];

const MorphParser = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");

  return (
    <div>
      <h1>Morphological Parser</h1>

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

export default MorphParser;
