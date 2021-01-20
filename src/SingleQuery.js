import { Link } from "react-router-dom";
import { postQuery } from "./utils";
import React, { useState, useEffect } from "react";
import { Select, Form, Input, Button, Checkbox } from "antd";
import { render } from "@testing-library/react";
import "./index.css";

const { Option } = Select;
const SingleQuery = ({
  value,
  onChange,
  url,
  example_sents,
  onQueryChange,
}) => {
  const [form] = Form.useForm();

  const [query, setQuery] = useState("");
  const handleSubmit = async () => {
    let response = await postQuery(url, query);
    onChange(response);
    onQueryChange(query || "");
  };
  const tmpChange = (value, event) => {
    setQuery(value);
  };
  //
  return (
    <>
      <Form form={form} name="form" onFinish={handleSubmit}>
        <Form.Item
          labelCol={{ span: 24 }}
          label={
            <label style={{ fontSize: "15px", fontWeight: "bold" }}>
              Example Sentences
            </label>
          }
          name="example_sents"
        >
          <Select
            onSelect={(value, event) => tmpChange(value, event)}
            style={{ width: "100%" }}
          >
            {example_sents.map((sent, id) => {
              return (
                <Option key={id} value={sent}>
                  {sent}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          labelCol={{ span: 24 }}
          label={
            <label style={{ fontSize: "15px", fontWeight: "bold" }}>
              Sentence
            </label>
          }
        >
          <Input.TextArea
            name="query"
            id="query"
            type="text"
            rows={8}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" size={"large"}>
            Run
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SingleQuery;
