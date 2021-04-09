import React,  { useState, useEffect } from "react";
import {Result,  Table, Input, InputNumber, Popconfirm, Form, Typography } from 'antd';
import { putQuery, deleteQuery } from "../utils";

const url_tools = "http://lvh.me:5000/api/tools"
const url_update = "http://lvh.me:5000/api/tool/"

const ManageTools = () => {
  const [tools, setTools] = useState([]);
  const [response, setResponse] = useState({});
  const [wait, setWait] = useState(false);
  const getTools = async () => {
    const response = await fetch(url_tools);
    let tools = await response.json();
    // set keys:
    tools = tools.map((tool, index)=>{
      let o = Object.assign({}, tool);
      o.key = index;
      return o;
    });
    setTools(tools);
    console.log(tools);
  };

  useEffect(() => {
    getTools();
  }, []);

  return (
  <>
  {wait && <Result {...{title: "Wait please"}}></Result>}
  {tools.length!=0 && <EditableTable rowData={tools} setResponse={setResponse} setWait={setWait}></EditableTable>}
  {Object.keys(response).length!=0 && <pre><Result {...response}></Result></pre>}
  </>
  );
};
export default ManageTools;

//--------------------------------------------
// from: https://ant.design/components/table/#components-table-demo-edit-row



const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = ({rowData, setResponse, setWait}) => {
  const [form] = Form.useForm();
  const [data, setData] = useState(rowData);
  const [editingKey, setEditingKey] = useState('');
  console.log("etab", data);
  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      enum: '',
      git: '',
      ip: '',
      port: '',
      update_time: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setWait(true);
        let {data: response, status: status} = await putQuery(url_update+data[index].enum, newData[index]);
        setWait(false);
        setResponse(response);
        if (status === 200){
          setData(newData);
        }
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const delTool = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        newData.splice(index, 1);
        setWait(true);
        let {data: response, status: status} = await deleteQuery(url_update+data[index].enum);
        setWait(false);
        setResponse(response);
        if (status === 200){
          setData(newData);
        }
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '20%',
      editable: true,
    },
    {
      title: 'Enum',
      dataIndex: 'enum',
      width: '10%',
      editable: true,
    },
    {
      title: 'Git Address',
      dataIndex: 'git',
      width: '25%',
      editable: true,
    },
    {
      title: 'IP',
      dataIndex: 'ip',
      width: '12%',
      editable: true,
    },
    {
      title: 'Port',
      dataIndex: 'port',
      width: '10%',
      editable: true,
    },
    {
      title: 'Updated',
      dataIndex: 'update_time',
      width: '13%',
      editable: true,
    },
    {
      title: 'Operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Popconfirm title="Sure to update?" onConfirm={() => save(record.key)}>
            <a
              style={{
                marginRight: 8,
              }}
            >
              Update
            </a>
            </Popconfirm>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <span>
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)} style={{
                marginRight: 8,
              }}>
            Edit
          </Typography.Link>
          <Popconfirm title="Are you sure to delete it?" onConfirm={() => delTool(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          </span>
          
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};
