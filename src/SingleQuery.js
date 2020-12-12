import { Link } from "react-router-dom";
import { postQuery } from "./utils";
import React, { useState, useEffect } from "react";
import { Select, Form, Input, Button, Checkbox } from "antd";
import { render } from "@testing-library/react";

const { Option } = Select;
const SingleQuery = ({ value, onChange, url, example_sents }) => {
  const [form] = Form.useForm();

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const [query, setQuery] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await postQuery(url, query);
    onChange(response.result);
  };
  const tmpChange = (value, event) => {
    console.log(event);
    console.log(value);
    setQuery(value);
  };
  return (
    <>
      <Form {...layout} form={form} name="form" onFinish={handleSubmit}>
        <Form.Item
          label="Example Sentences"
          name="example_sents"
          wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
        >
          <Select
            value={example_sents[0]}
            onSelect={(value, event) => tmpChange(value, event)}
          >
            {example_sents.map((sent, id) => {
              return (
                <Option key={id} value={sent}>
                  {sent}
                </Option>
              );
            })}
            <Option value={query}>{query}</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="query"
          id="query"
          type="text"
          label="Sentence"
          defaultValue={query || ""}
          onChange={(e) => setQuery(e.target.value)}
        >
          <Input.TextArea rows={8} />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Run
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SingleQuery;
