import { postQuery } from "./utils";
import React, { useState } from "react";
import SingleQuery from "./SingleQuery";
import TaskDefinition from "./TaskDefinition";
import TaskInformation from "./TaskInformation";
import { useTranslation } from "react-i18next";
import "antd/dist/antd.css";

const example_sents = ["güzel bir filmdi."];
const url = "http://lvh.me:5001/evaluate";

const Sentiment = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const { t, i18n } = useTranslation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await postQuery(url, query);
    setAnswer(response.result);
  };
  return (
    <div>
      <TaskDefinition context="sentiment" />
      <TaskInformation context="sentiment1_info" />
      <SingleQuery
        onChange={setAnswer}
        value={answer}
        url={url}
        example_sents={example_sents}
        onQueryChange={setQuery}
      />
      <div>
        {answer.result == "Positive" ? (
          <>
            <span
              style={{ color: "green", fontSize: "26px", fontWeight: "bold" }}
            >
              {answer.result}
            </span>
          </>
        ) : answer.result == "Negative" ? (
          <>
            <span
              style={{ color: "red", fontSize: "26px", fontWeight: "bold" }}
            >
              {answer.result}
            </span>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Sentiment;
