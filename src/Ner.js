import SingleQuery from "./SingleQuery";
import React, { useState } from "react";
import Brat from "./Brat";

const url = "http://lvh.me:4440/evaluate";

const docData = {
  text: "Ed O'Kelley was the man who shot the man who shot Jesse James.",
  entities: [
    ["T1", "Person", [[0, 11]]],
    ["T2", "Person", [[20, 23]]],
    ["T3", "Person", [[37, 40]]],
    ["T4", "Person", [[50, 61]]],
  ],
};

const collData = {
  entity_types: [
    {
      type: "Person",
      labels: ["Person", "Per"],
      bgColor: "#7fa2ff",
      borderColor: "darken",
    },
  ],
};

const Ner = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const example_sents = ["Ali ata bak", "Naber"];
  return (
    // Tool header
    // Tool explanation-body
    <>
      <SingleQuery
        onChange={setAnswer}
        value={answer}
        url={url}
        example_sents={example_sents}
      />
      {/* render only if answer is not undefined; then, block from re-render */}
      <Brat doc={docData} coll={collData} />
    </>
    // brat(answer)
  );
};

export default Ner;
