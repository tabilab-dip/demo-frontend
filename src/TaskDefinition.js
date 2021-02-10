import React from "react";
import { Collapse } from "antd";
import { useTranslation } from "react-i18next";

const { Panel } = Collapse;

const TaskDefinition = ({ context }) => {
  const { t, i18n } = useTranslation();

  return (
    <Collapse defaultActiveKey={["1"]}>
      <Panel header={t(context + ".header")} key="1">
        <div>
          <b>Description: </b>
          <div>
            {t(context + ".description")
              .split("\n")
              .map((line) => (
                <p>{line}</p>
              ))}
          </div>
        </div>

        <div>
          <div>
            {t(context + ".content")
              .split("\n")
              .map((line) => (
                <p>{line}</p>
              ))}
          </div>
        </div>
      </Panel>
    </Collapse>
  );
};

export default TaskDefinition;
