import React, { useState } from "react";
import SingleQuery from "./SingleQuery";
import { useTranslation } from "react-i18next";
import TaskDefinition from "./TaskDefinition";
import TaskInformation from "./TaskInformation";

const url = "http://lvh.me:5000/evaluate";
const example_sents = ["şekerleri yedim .\neve geldim ."];

const MorphParser = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState([]);
  const { t, i18n } = useTranslation();

  return (
    <div>
      <TaskDefinition context="mparser" />
      <TaskInformation context="mparser1_info" />
      <SingleQuery
        onChange={setAnswer}
        value={answer}
        url={url}
        example_sents={example_sents}
        onQueryChange={setQuery}
      />
      <div>
        {answer.map((sentence) => {
          return (
            <>
              <hr
                style={{
                  color: "#000000",
                  backgroundColor: "#000000",
                  height: 0.5,
                  borderColor: "#000000",
                }}
              />
              <div>
                {sentence.map((token) => {
                  const { word, parses } = token;
                  return (
                    <>
                      <span className="second-word-formatting">
                        <h1>
                          <b>{word}&nbsp;:</b>
                        </h1>
                      </span>
                      <div
                        style={{
                          padding: "0px 80px",
                        }}
                      >
                        {parses.map((parse) => {
                          return (
                            <div>
                              {parse.map((suffix) => {
                                return (
                                  <span style={{ padding: "0px 8px" }}>
                                    <b>{suffix}</b>
                                  </span>
                                );
                              })}
                              <br />
                            </div>
                          );
                        })}
                      </div>
                      <br />
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MorphParser;
