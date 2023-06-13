import { createFormatDate } from "../helpers";

export const CardTask = ({
  id,
  nombre,
  categoria,
  fecha,
  descripcion,
  estaTerminada,
  getTask,
  deleteTask,
}) => {
  const obj = {
    id,
    nombre,
    categoria,
    fecha,
    estaTerminada,
    descripcion,
  };
  return (
    <div className="border-2 rounded-md px-3 py-3 mt-2 shadow-md bg-white">
      <p className="font-bold">
        Nombre : <span className="font-normal">{nombre} </span>
      </p>
      <p className="font-bold">
        Categoría : <span className="font-normal">{categoria} </span>
      </p>
      <p className="font-bold">
        Descripción : <span className="font-normal">{descripcion} </span>
      </p>
      <p className="font-bold">
        Fecha : <span className="font-normal">{createFormatDate(fecha)} </span>
      </p>
      <p className="font-bold">
        Terminada :{" "}
        <span className="font-normal">{estaTerminada ? "Si" : "No"}</span>
      </p>
      <div className="flex justify-around">
        <button
          className="bg-green-700 text-white w-full font-bold m-2 py-2 rounded-full uppercase"
          onClick={() => getTask(obj)}
        >
          Editar
        </button>
        <button
          className="w-full bg-red-700 text-white font-bold m-2 py-2 rounded-full uppercase"
          onClick={() => deleteTask(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
