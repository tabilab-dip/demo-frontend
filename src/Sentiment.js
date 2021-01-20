import { Link } from "react-router-dom";
import { postQuery } from "./utils";
import "antd/dist/antd.css";
import React, { useState } from "react";
import SingleQuery from "./SingleQuery";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";
import Icon from "antd/lib/icon";
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
      <h1>{t("sentiment.header")}</h1>
      <p>{t("sentiment.description")}</p>
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
            <span style={{ color: "green" }}>{answer.result}</span>
            {/* <div>
              <CheckCircleTwoTone twoToneColor="#52c41a" />
            </div> */}
          </>
        ) : answer.result == "Negative" ? (
          <>
            <span style={{ color: "red" }}>{answer.result}</span>
            {/* <div>
              <CloseCircleTwoTone twoToneColor="#eb2f96" />
            </div> */}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Sentiment;
