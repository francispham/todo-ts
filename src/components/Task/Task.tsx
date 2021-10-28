/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { FC } from "react";

import { Task as TaskType } from "../../types";
import { priorites } from "../../styles";
import { PRIORITY_KEY } from "../../constants";

import styles from "./styles";

interface TaskProps {
  task: TaskType;
  onClick: (id: number) => void;
}

const Task: FC<TaskProps> = ({ task, onClick }) => {
  const { text, completed, priority } = task;
  return (
    <li css={styles.container(completed)}>
      <div css={[priorites.base, priorites[PRIORITY_KEY[priority]]]} />
      <span>{text}</span>
      <button onClick={() => onClick(task.id)} css={styles.completeButton}>
        <span css={styles.buttonContent(completed)}>&#x2714;</span>
      </button>
    </li>
  );
};

export default Task;
