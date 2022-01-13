import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import UploadFiles from "./upload-files.component";

const BoardUser = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
        <div className="container" style={{ width: "600px" }}>
          <div style={{ margin: "20px 0" }}>
            <h4>Drag & Drop File Upload</h4>
          </div>
          <UploadFiles />
        </div>
      </header>
    </div>
  );
};

export default BoardUser;
