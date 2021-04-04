import React, { useState } from 'react';
import { Result, Form, Input, Button } from 'antd';
import { postQuery } from "../utils";
const url = "http://lvh.me:5000/api/tool";

const AddTools = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const [serverResponse, setServerResponse] = useState([]);
  const onFinish =  async (values) => {
    let response = {};
    if (typeof values.ip === 'undefined' 
        || values.port === 'undefined' 
        || values.git === 'undefined' 
        || values.enum === 'undefined'
        || values.name === "undefined"){
      response = {title: "You need to specify all values"};
    }
    else{
      response = await postQuery(url, values);
    }
    setServerResponse(response);
  };
  
  const formItemLayout = {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        };
  
  const buttonItemLayout = {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        };
    

  return (
  <>
    
      <Form
        {...formItemLayout}
        form={form}
        onFinish={onFinish}
      >
      <b>
      Once you have a program up and running on a server; enter its port and IP address below.
      <br />
      </b>
        <Form.Item label="IP" name="ip" >
          <Input placeholder="127.0.0.1" />
        </Form.Item>
        <Form.Item label="Port" name="port" >
          <Input/>
        </Form.Item>
        <b>
        Also you should enter the git address which is used by proxy to save the input/output specifications of the given program.
        </b>
        <Form.Item label="Git Address" name="git" >
          <Input placeholder="e.g. https://github.com/tabilab-dip/BOUN-PARS.git" />
        </Form.Item>
        <b>
        Finally, you also specify a "unique" name for the program and a human readable name
        </b>
         <Form.Item label="Name (enum)" name="enum" >
          <Input placeholder="boun-pars (no spaces, use only alphanumeric characters and '-')" />
        </Form.Item>
         <Form.Item label="Name" name="name" >
          <Input placeholder="Dependency Parser: BOUN-PARS" />
        </Form.Item>
         <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
      {serverResponse && <pre><Result {...serverResponse}></Result></pre>}
    </>
  );
};
export default AddTools;
