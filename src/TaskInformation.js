import React from "react";
import { Layout, Collapse } from "antd";
import { useTranslation } from "react-i18next";

const { Panel } = Collapse;
const { Content } = Layout;

const TaskInformation = ({ context }) => {
  const { t, i18n } = useTranslation();

  return (
    <Collapse>
      <Panel header="Project Details" key="1">
        <div>
          <b>Paper: </b>
          <p>
            <a href={t(context + ".paper_link")}>
              {t(context + ".paper_name")}
            </a>
          </p>
        </div>
        <div>
          <b>Author(s) of the paper: </b>
          <p>{t(context + ".paper_authors")}</p>
        </div>
        <div>
          <b>Author(s) of the program: </b>
          <p>{t(context + ".program_authors")}</p>
        </div>
        <div>
          <b>Program Link: </b>
          <p>
            <a href={t(context + ".program_link")}>
              {t(context + ".program_link")}
            </a>
          </p>
        </div>
      </Panel>
    </Collapse>
  );
};

export default TaskInformation;
