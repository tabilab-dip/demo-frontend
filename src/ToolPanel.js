import React, {useRef} from "react";
import { Layout, Tabs } from "antd";
import AddTools from "./tool_utils/AddTools";
import ManageTools from "./tool_utils/ManageTools";
const { Content } = Layout;
const { TabPane } = Tabs;


/*
Makes the corresponding requets of the tab; 
    if the server requires auth, 
    renders login prompt instead
*/

const ToolPanel = () => {
  const addToolRef = useRef();
  const onTabSwitch = (activeKey) => {
    if(activeKey !== "1"){
      addToolRef.current.resetSwitch();
    }

  }
  return (
  <div>
  <Tabs defaultActiveKey="1" onChange={onTabSwitch} type="card">
    <TabPane tab="Add Tools" key="1">
      <AddTools ref={addToolRef}></AddTools>
    </TabPane>
    <TabPane tab="Manage Tools" key="2">
      <ManageTools></ManageTools>
    </TabPane>
      </Tabs>
  </div>
  );
};



export default ToolPanel;
