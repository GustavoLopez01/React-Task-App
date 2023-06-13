import { useEffect, useState } from "react";
import { alertMessage, createId } from "../helpers";

export const TaskForm = ({ setTasks, taskObj, updateTask }) => {
  const [flag, setFlag] = useState(false);
  const [task, setTask] = useState({
    id: "",
    nombre: "",
    categoria: "",
    descripcion: "",
    fecha: "",
    estaTerminada: false,
  });

  useEffect(() => {
    if (Object.keys(taskObj).length > 0) {
      setTask((actualValues) => ({
        ...actualValues,
        ["id"]: taskObj.id,
        ["nombre"]: taskObj.nombre,
        ["fecha"]: taskObj.fecha,
        ["categoria"]: taskObj.categoria,
        ["descripcion"]: taskObj.descripcion,
        ["estaTerminada"]: taskObj.estaTerminada,
      }));

      setFlag(true);
    } else {
      cleanForm();
      setFlag(false);
    }
  }, [taskObj]);

  const { nombre, categoria, descripcion, estaTerminada } = task;

  const handleInputChange = (e) => {
    e.preventDefault();

    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, categoria, descripcion].includes("")) {
      alertMessage("Todos los campos son obligatorios.", "warning", "Oops...");
      return;
    }

    if (!task.id) {
      task.id = createId();
      task.fecha = Date.now();
      setTasks((actualTasks) => [...actualTasks, task]);
      alertMessage("Se agrego la tarea con exito.", "success", "Ok...");
      cleanForm();
      return;
    }

    updateTask(task);
    setFlag(false);

    cleanForm();
  };

  const handleStatusChange = (e) => {
    const status = e.target.value === "true" ? true : false;

    setTask((actualValues) => ({ ...actualValues, ["estaTerminada"]: status }));
  };
  const cleanForm = () => {
    setTask({
      nombre: "",
      id: "",
      fecha: "",
      categoria: "",
      descripcion: "",
    });
  };

  return (
    <div className="lg:w-1/2 md:w-1/2 px-5 m-5">
      <h2 className="text-center text-black font-black text-2xl mb-3">
        Registra una nueva tarea
      </h2>
      <form
        onSubmit={handleSubmit}
        className="border shadow-xl bg-white py-5 rounded-lg"
      >
        <div className="py-2 px-5">
          <label htmlFor="nombre" className="font-bold">
            Nombre :
          </label>

          <input
            className="w-full mt-2 shadow-lg border border-3 rounded-md py-1 px-3"
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ingresa el nombre de la tarea"
            onChange={(e) => handleInputChange(e)}
            value={nombre}
          />
        </div>

        <div className="py-2 px-5">
          <label htmlFor="categoria" className="font-bold">
            Categoria :
          </label>

          <select
            className="w-full mt-2 shadow-lg border border-3 rounded-md py-1 px-3"
            type="text"
            id="categoria"
            name="categoria"
            placeholder="Ingresa el nombre de la tarea"
            onChange={(e) => handleInputChange(e)}
            value={categoria}
          >
            <option value="">-- Seleccione una opción --</option>
            <option value="trabajo">Trabajo</option>
            <option value="hogar">Hogar</option>
            <option value="gym">Gym</option>
            <option value="escuela">Escuela</option>
          </select>
        </div>

        {flag ? (
          <div className="py-2 px-5">
            <label htmlFor="terminada" className="font-bold">
              ¿La tarea esta terminada? :
            </label>

            <select
              name="estaTerminada"
              id="terminada"
              className="w-full mt-2 shadow-lg border border-3 rounded-md py-1 px-3"
              value={estaTerminada ? "true" : "false"}
              onChange={(e) => handleStatusChange(e)}
            >
              <option value="">-- Seleccione una opción --</option>
              <option value="true">Si</option>
              <option value="false">No</option>
            </select>
          </div>
        ) : null}

        <div className="py-2 px-5">
          <label htmlFor="descripcion" className="font-bold">
            Descripción :
          </label>

          <textarea
            className="w-full mt-2 shadow-lg border border-3 rounded-md py-1 px-3"
            type="text"
            id="descripcion"
            name="descripcion"
            placeholder="Ingresa la descripción de la tarea"
            onChange={(e) => handleInputChange(e)}
            value={descripcion}
          />
        </div>

        <div className="py-2 px-5">
          <input
            className="w-full mt-2 shadow-lg uppercase border border-3 rounded-full py-1 px-3 bg-orange-600 hover:cursor-pointer text-white font-black"
            type="submit"
            value={flag ? "Actualizar tarea" : "Agregar tarea"}
          />
        </div>
      </form>
    </div>
  );
};
