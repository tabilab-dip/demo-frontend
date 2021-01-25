import SingleQuery from "./SingleQuery";
import React, { useState } from "react";
import Brat from "./Brat";
import TaskDefinition from "./TaskDefinition";
import TaskInformation from "./TaskInformation";
import { docs, colls } from "./data_test_brat";
const url = "http://lvh.me:4440/evaluate";

const Ner = () => {
  const [index, setIndex] = useState(0);
  const bratUpdate = () => {
    setIndex((prevState) => (prevState + 1) % 2);
  };

  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const example_sents = ["Ali ata bak", "Naber"];
  return (
    <div>
      <TaskDefinition context="ner" />
      <TaskInformation context="ner1_info" />
      <SingleQuery
        onChange={setAnswer}
        value={answer}
        url={url}
        example_sents={example_sents}
        onQueryChange={setQuery}
      />
      <button onClick={bratUpdate}>Brat Test</button>
      <Brat doc={docs[index]} coll={colls[index]} />
    </div>
  );
};

export default Ner;
