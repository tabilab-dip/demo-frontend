import SingleQuery from "./SingleQuery";
import React, { useState } from "react";

const Ner = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const example_sents = ["Ali ata bak", "Naber"];
  const handleAnswerChange = (new_answer) => {
    setAnswer(new_answer);
  };
  return (
    // Tool header
    // Tool explanation-body
    <SingleQuery
      onChange={handleAnswerChange}
      value={answer}
      url="http://lvh.me:4440/evaluate"
      example_sents={example_sents}
    />
    // brat(answer)
  );
};

export default Ner;
