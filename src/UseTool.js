import React, { useEffect, useState } from "react";
import TaskDefinition from "./TaskDefinition";
import TaskInformation from "./TaskInformation";
import ErrorBoundary from "./ErrorBoundary";
import {getQuery, postQuery} from "./utils";
import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';

import "antd/dist/antd.css";

const url_get_ui = "http://www.lvh.me:5000/api/tool/ui/";
const url_post_run = "http://www.lvh.me:5000/api/tool/run/";

const Form = withTheme(AntDTheme);


const UseTool = ({tool}) => {
    const [formData, setFormData] = useState({});
    const [answer, setAnswer] = useState("");
    
    const handleSubmit = async () => {
        let response = await postQuery(url_post_run+tool.enum, formData);
        setAnswer(response);
    };

    const log = (type) => console.log.bind(console, type);
    return (
        <div>
        <ErrorBoundary>
        {(Object.keys(tool).length!=0) 
        &&
        <>
            <TaskDefinition authorSpecs={tool["author_json"]} />
            <TaskInformation authorSpecs={tool["author_json"]} />
            <Form
                schema={tool["root_json"]["schema"]}
                formData={tool["form_data_json"]}
                uiSchema={tool["root_json"]["uiSchema"]}
                onChange={(e) => setFormData(e.formData)}
                onSubmit={handleSubmit}
                onError={log("errors")}
            />
        </>
        }
        </ErrorBoundary>
        </div>
    );
};

export default UseTool;
