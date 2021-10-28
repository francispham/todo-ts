import { css } from "@emotion/react";

export const app = {
  container: css`
    body {
      background-color: #a1a1a1;
      margin: 1rem;
    }

    h2 {
      text-transform: uppercase;
      font-size: 1.5rem;
      margin-top: 2rem;
    }

    .dropdown-item {
      cursor: pointer;
    }
  `
};

export const priorites = {
  base: css`
    flex: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-right: 12px;
    :after {
      content: " ";
    }
  `,
  low: css`
    background-color: #2b8735;
  `,
  medium: css`
    background-color: #ea7c25;
  `,
  high: css`
    background-color: #ce0000;
  `
};
