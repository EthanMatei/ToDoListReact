import { useState } from "react";
import "./App.css";
import { ChangeEvent } from "react";
import ITask from "./interfaces";
import ToDoTask from "./components/ToDoTask";
function App() {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState(0);
  const [todoList, setToDoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };
  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setToDoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };
  const completeTask = (taskNameToDelete: string): void => {
    setToDoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="topHead">
        <h2>Typescript React To do List</h2>
      </div>
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="deadline(in days)..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoHead">
        <h3>Current To Do List:</h3>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <ToDoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
}

export default App;
