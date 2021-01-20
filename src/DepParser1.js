import SingleQuery from "./SingleQuery";
import React, { useState } from "react";
import Brat from "./Brat";

const url = "http://lvh.me:5002/evaluate";

const DepParser1 = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState([]);
  const example_sents = ["Ali ata bak", "Bu örnek bir cümledir."];
  return (
    <>
      <SingleQuery
        onChange={setAnswer}
        url={url}
        example_sents={example_sents}
        onQueryChange={setQuery}
      />
      {console.log({ text: query, ...answer })}
      {answer ? <Brat coll={{}} doc={{ text: query, ...answer }} /> : ""}
    </>
    // brat(answer)
  );
};

export default DepParser1;
