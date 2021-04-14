import React, {useState, useEffect} from "react";
import { Layout, Tabs } from "antd";
import AddTools from "./tool_utils/AddTools";
import ManageTools from "./tool_utils/ManageTools";
import LoginPanel from "./tool_utils/LoginPanel";
import AccountManagement from "./tool_utils/AccountManagement";
import { getQuery } from "./utils";

const { TabPane } = Tabs;

const url = "http://lvh.me:5000/api/user/isauth";


/*
In each component: after http requests:
  - if 401 returned, setIsAuth false
  - if logged-in successfully, setIsAuth true 
*/

const ToolPanel = () => {
  const [isAuth, setIsAuth] = useState(false);

  

  useEffect(async () => {
    console.log("sending", isAuth);
    let response = await getQuery(url);
    let {data, status} = response;
    console.log("as", status);
    if (status===200){
      setIsAuth(true);
    }
  }, []);

  return (
    <>
    {isAuth
      ? <Tabs defaultActiveKey="1" type="card">
            <TabPane tab="Add Tools" key="1">
              <AddTools isAuth={isAuth} setIsAuth={setIsAuth}></AddTools>
            </TabPane>
            <TabPane tab="Manage Tools" key="2">
              <ManageTools isAuth={isAuth} setIsAuth={setIsAuth}></ManageTools>
            </TabPane>
            <TabPane tab="Account Management" key="3">
              <AccountManagement isAuth={isAuth} setIsAuth={setIsAuth}></AccountManagement>
            </TabPane>
          </Tabs>
      : <LoginPanel isAuth={isAuth} setIsAuth={setIsAuth}/>
       
    }
    </>
    );
};



export default ToolPanel;
