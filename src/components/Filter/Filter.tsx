/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { FC, ChangeEvent } from "react";

import { FilterValues } from "../../types";
import styles from "./styles";

interface FilterProps {
  value: FilterValues;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Filter: FC<FilterProps> = ({ value, onChange }) => {
  return (
    <div css={styles.container}>
      <span>Filter</span>
      <select
        value={value}
        onChange={onChange}
        className="custom-select"
        css={styles.select}
      >
        <option value={-1}>All</option>
        <option value={0}>Low</option>
        <option value={1}>Medium</option>
        <option value={2}>High</option>
      </select>
    </div>
  );
};

export default Filter;
