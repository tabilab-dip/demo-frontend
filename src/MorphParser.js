import { Link } from "react-router-dom";
import { postQuery } from "./utils";
import React, { useState } from "react";
import SingleQuery from "./SingleQuery";
const url = "http://lvh.me:5000/evaluate";

const example_sents = ["şekerleri yedim .\neve geldim ."];

const MorphParser = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState([]);

  return (
    <div>
      <h1>
        <b>Morphological Parser</b>
      </h1>
      <p>
        Write each sentence in a newline. End-of-sentence markers should be
        seperated from the previous token with white spaces. Example:
        <br />
        "Şekerleri yedim ."
        <br />
        "Eve gittim ."
      </p>
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
