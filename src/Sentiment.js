import { Link } from "react-router-dom";
import { postQuery } from "./utils";
import React, { useState } from "react";

const uri = "http://lvh.me:4440/evaluate";

const Sentiment = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await postQuery(uri, query);
    //setAnswer();
    setAnswer(response.result);
  };
  return (
    <div>
      <h1>Sentiment Analysis</h1>

      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="query">Query : </label>
            <input
              type="text"
              id="query"
              name="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </article>
      <div>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Sentiment;
