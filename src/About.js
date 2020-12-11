import React from "react";

const About = () => {
  return (
    <div>
      <h1>TODO</h1>
      <p>TODO List</p>
      <ul>
        <li>
          <h4>HazirCevap</h4>
          <p>
            Parts of source code in github repo are missing. Need to get the
            complete code
          </p>
        </li>
        <li>
          <h4>BounPars</h4>
          <p>
            Takes 38 seconds to run the experiment with sentence "bu örnek bir
            cümledir."
          </p>
        </li>
        <li>
          <h4>CananPembe Summarizer</h4>
          <p>
            <h5>
              1- It includes 3rd party compiled programs -> for publishing:
              license
            </h5>
            <h5>
              2- It accepts html/xlsx pages as input. How should demo work?
            </h5>
          </p>
        </li>
        <li>
          <h4>Ermi</h4>
          <p>
            We can acquire trained models. In total there are 14 language models
            -> 96 GB. However to set up a working system we need only 1 and
            acquire the rest later on. Zeynep Yirmibeşoğlu has those models, I
            think we should start with Turkish trained model rather than
            training it from scratch.
          </p>
        </li>
        <li>
          <h4>NER</h4>
          <p>Need to implement this, we have the model now</p>
        </li>
      </ul>
    </div>
  );
};

export default About;
