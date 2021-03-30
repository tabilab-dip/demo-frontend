import React from "react";
import { Layout, Tabs } from "antd";
import AddDockerForm from "./docker_utils/AddDockerForm"
const { Content } = Layout;
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
/*
Makes the corresponding requets of the tab; 
    if the server requires auth, 
    renders login prompt instead
*/

const DockerPanel = () => {
  return (
  <div>
  <Tabs defaultActiveKey="1" onChange={callback} type="card" style={{
  }}>
    <TabPane tab="Add Container" key="1">
      <AddDockerForm></AddDockerForm>
    </TabPane>
    <TabPane tab="Manage Containers" key="2">
      Content of Tab Pane 2
    </TabPane>
      </Tabs>
  </div>
  );
};



export default DockerPanel;
