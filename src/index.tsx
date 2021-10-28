/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import ReactDOM from "react-dom";

import TaskList from "./components/TaskList";

import { app } from "./styles";

const App = () => {
  return (
    <div css={app.container}>
      <TaskList />
    </div>
  );
};

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

console.clear();
