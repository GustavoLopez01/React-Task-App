import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { alertMessage, alertMessageDelete } from "./helpers";

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) ?? []
  );
  const [taskObj, setTaskObj] = useState({});

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const getTask = (obj) => {
    setTaskObj(obj);
  };

  const updateTask = (task) => {
    const newTasks = tasks.map((taskArr) =>
      taskArr.id === task.id ? task : taskArr
    );

    setTasks(newTasks);
    alertMessage("La tarea se actualizo correctamente", "success", "Tarea Actualizada")
  };

  const deleteTask = async (id) => {
    const resp = await alertMessageDelete();
    if (resp) {
      setTaskObj({});
      const newTaks = tasks.filter((task) => task.id !== id);
      setTasks(newTaks);
      return;
    }
  };

  return (
    <>
      <div>
        <Header />

        <div className="w-full md:flex">
          <TaskForm
            setTasks={setTasks}
            taskObj={taskObj}
            updateTask={updateTask}
          />
          <TaskList tasks={tasks} getTask={getTask} deleteTask={deleteTask} />
        </div>
      </div>
    </>
  );
};

export default App;
