/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { FC } from "react";

import TaskInput from "../TaskInput";
import Task from "../Task";
import Filter from "../Filter";

import useTaskList from "./useTaskList";
import styles from "./styles";

const TaskList: FC = () => {
  const {
    tasks,
    filter,
    filterTasks,
    addTask,
    clearTasks,
    toggleComplete
  } = useTaskList();

  const filteredTasks = tasks.filter((task) =>
    filter === -1 ? task : task.priority === filter
  );

  return (
    <div css={styles.container}>
      <TaskInput onSubmit={addTask} />
      <Filter value={filter} onChange={filterTasks} />

      <h2>Things to do</h2>
      <ul css={styles.taskList}>
        {filteredTasks.map((task) => (
          <Task key={task.id} onClick={toggleComplete} task={task} />
        ))}
      </ul>
      <hr />
      <button className="btn btn-sm btn-dark" onClick={clearTasks}>
        Clear tasks
      </button>
    </div>
  );
};

export default TaskList;
