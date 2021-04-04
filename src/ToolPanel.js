import React from "react";
import { Layout, Tabs } from "antd";
import AddTools from "./tool_utils/AddTools";
import ManageTools from "./tool_utils/ManageTools";
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

const ToolPanel = () => {
  return (
  <div>
  <Tabs defaultActiveKey="1" onChange={callback} type="card">
    <TabPane tab="Add Container" key="1">
      <AddTools></AddTools>
    </TabPane>
    <TabPane tab="Manage Containers" key="2">
      <ManageTools></ManageTools>
    </TabPane>
      </Tabs>
  </div>
  );
};



export default ToolPanel;
