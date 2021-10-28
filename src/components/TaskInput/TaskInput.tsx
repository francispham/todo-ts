/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { FC } from "react";

import useTaskInput from "./useTaskInput";

import { priorites } from "../../styles";
import { PRIORITY_KEY } from "../../constants";
import styles from "./styles";

interface TaskInputProps {
  onSubmit: (value: string, priority: number) => void;
}

const TaskInput: FC<TaskInputProps> = ({ onSubmit }) => {
  const {
    value,
    priority,
    handleChangeInput,
    handleChangePriority,
    resetInput,
    resetPriority
  } = useTaskInput();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit(value, priority);
    resetInput();
    resetPriority();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="input-group">
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              css={styles.priotityButton}
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span css={[priorites.base, priorites[PRIORITY_KEY[priority]]]} />
              <span css={styles.priorityText}>{PRIORITY_KEY[priority]}</span>
            </button>
            <div className="dropdown-menu">
              <div
                role="button"
                className="dropdown-item"
                onClick={() => handleChangePriority(2)}
                css={styles.dropdownItem}
              >
                <span css={[priorites.base, priorites.high]} />
                <span>High</span>
                {priority === 2 && <span>&nbsp;&#x2714;</span>}
              </div>
              <div
                role="button"
                className="dropdown-item"
                onClick={() => handleChangePriority(1)}
                css={styles.dropdownItem}
              >
                <span css={[priorites.base, priorites.medium]} />
                <span>Medium</span>
                {priority === 1 && <span>&nbsp;&#x2714;</span>}
              </div>
              <div
                role="button"
                className="dropdown-item"
                onClick={() => handleChangePriority(0)}
                css={styles.dropdownItem}
              >
                <span css={[priorites.base, priorites.low]} />
                <span>Low</span>
                {priority === 0 && <span>&nbsp;&#x2714;</span>}
              </div>
            </div>
          </div>
          <input
            type="text"
            className="form-control form-control-lg"
            id="name"
            placeholder="Type something..."
            value={value}
            onChange={handleChangeInput}
          />
        </div>

        <small className="form-text text-muted">
          Type something in the input field above and press Enter.
        </small>
      </div>
    </form>
  );
};

export default TaskInput;
