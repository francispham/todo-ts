import { css } from "@emotion/react";

export default {
  container: (completed: boolean) => css`
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
    margin: 0 0 0.25rem;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: ${completed ? "line-through" : ""};
    color: ${completed ? "#CCC" : ""};
  `,
  completeButton: css`
    margin-left: auto;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    &:focus {
      outline: none;
    }
  `,
  buttonContent: (completed: boolean) => css`
    color: ${completed ? "#75b51b" : ""};
  `
};
