import React, { useEffect, useState } from "react";
import {getQuery} from "../utils";
import { Descriptions, List, Typography, Collapse } from "antd";
const { Panel } = Collapse;
const url_get_user = "http://lvh.me:5000/api/user/";

const AccountManagement = ({isAuth, setIsAuth}) => {
    const [user, setUser] = useState({});
    const [update, setUpdate] = useState(false);

    const getUser = async () => {
        let {data: data, status: status} = await getQuery(url_get_user);
        if (status == 401) {
            setIsAuth(false);
            return;
        }
        setUser(data);
    };

    useEffect(() => {
        console.log("UF");
        getUser();
        
    }, [update]);


    return (
    <div>
        { 
        (Object.keys(user).length!=0)
            ? (
            <>
                <AccountInfo user={user}></AccountInfo>
                <UpdatePassword></UpdatePassword>
                {(user.roles.includes("admin")) && <UsersList></UsersList>}
            </> 
            )
            : <p>Waiting</p>
        }
    </div>
    );
};

const AccountInfo = ({user}) => {

    return (
    <div>
    <Descriptions title="User Info" bordered labelStyle={{fontWeight: "bold"}}>
        <Descriptions.Item label="Username">{user.username}</Descriptions.Item>
        <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
    </Descriptions>
    <Collapse defaultActiveKey="0">
        <Panel header="Tools" key="1">
            <List
                header={<div>List:</div>}
                bordered
                dataSource={user.tools}
                renderItem={item => (
                    <List.Item>
                        - {item}
                    </List.Item>
                )}
            />
        </Panel>
      

    </Collapse>
    
  </div>
  )
};

const UpdatePassword = () => {
    return (<div></div>);
};

const UsersList = () => {
    /*
    TODO 
    Has the user list as table with Modals for editing each user:
        modal is a separate component
    */ 
    return (<div></div>);
};

export default AccountManagement;
