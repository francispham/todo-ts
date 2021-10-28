import { useState, ChangeEvent } from "react";
import { Task, PriorityKeys, FilterValues } from "../../types";

type AddTask = (value: string, priority: PriorityKeys) => void;

type UseTaskList = () => {
  tasks: Task[];
  addTask: AddTask;
  filter: FilterValues;
  clearTasks: () => void;
  filterTasks: (e: ChangeEvent<HTMLSelectElement>) => void;
  toggleComplete: (id: number) => void;
};

const useTaskList: UseTaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 0,
      text: "Get groceries",
      completed: false,
      priority: 2
    },
    {
      id: 1,
      text: "Book flight ticket",
      completed: false,
      priority: 1
    },
    {
      id: 2,
      text: "Buy shoes",
      completed: true,
      priority: 0
    }
  ]);
  const [filter, setFilter] = useState<FilterValues>(-1);

  const addTask: AddTask = (value, priority) => {
    setTasks((prevState) => {
      const newTask = {
        id: prevState.length > 0 ? prevState[prevState.length - 1].id + 1 : 0,
        text: value,
        completed: false,
        priority: priority
      };
      return [...prevState, newTask];
    });
  };

  // TODO: implement complete toggle
  const toggleComplete = (id: number) => {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // TODO: implement filter
  // -1: "all",
  // 0: "low",
  // 1: "medium",
  // 2: "high"
  const filterTasks = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value, 10) as FilterValues;
    console.log(value);
    setFilter(value);
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return {
    tasks,
    addTask,
    filter,
    clearTasks,
    filterTasks,
    toggleComplete
  };
};

export default useTaskList;
