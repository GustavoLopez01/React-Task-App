import { CardTask } from "./CardTask";

export const TaskList = ({ tasks, getTask, deleteTask }) => {
  return (
    <div className="lg:w-1/2 md:w-1/2 m-5 px-5 overflow-y-auto">
      <h2 className="text-black text-center font-black text-2xl">{tasks.length > 0 ? 'Lista de tareas': 'No hay tareas registradas'}</h2>
      {tasks.map((task, index) => (
        <CardTask {...task} key={index} getTask={getTask} deleteTask={deleteTask} />
      ))}
    </div>
  );
};
