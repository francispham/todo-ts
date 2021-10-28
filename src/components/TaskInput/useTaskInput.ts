import { useState, ChangeEvent } from "react";
import { PriorityKeys } from "../../types";

type HandleChangeInput = (e: ChangeEvent<HTMLInputElement>) => void;
type HandleChangePriority = (priority: PriorityKeys) => void;

type UseTaskInput = () => {
  value: string;
  priority: PriorityKeys;
  handleChangeInput: HandleChangeInput;
  handleChangePriority: HandleChangePriority;
  resetInput: () => void;
  resetPriority: () => void;
};

const useTaskInput: UseTaskInput = () => {
  const [value, setValue] = useState<string>("");
  const [priority, setPriority] = useState<PriorityKeys>(0);

  const handleChangeInput: HandleChangeInput = (e) => {
    const { value } = e.target;
    setValue(value);
  };
  const handleChangePriority: HandleChangePriority = (priority) =>
    setPriority(priority);

  const resetInput = () => setValue("");
  const resetPriority = () => setPriority(0);

  return {
    value,
    priority,
    handleChangeInput,
    handleChangePriority,
    resetInput,
    resetPriority
  };
};

export default useTaskInput;
