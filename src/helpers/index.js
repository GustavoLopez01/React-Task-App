import Swal from "sweetalert2";

export const createId = () => {
  const date = Date.now().toString(36).substring(2);
  const random = Math.random(8).toString(36);

  return date + random;
};

export const createFormatDate = (fecha) => {
  const dateFormat = new Date(fecha);

  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return dateFormat.toLocaleDateString("es-ES", options);
};

export const alertMessage = (msg, icon, title) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton:
        "bg-green-700 m-2 py-2 px-4 rounded-full text-white font-bold",
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons.fire({
    icon,
    title,
    text: msg,
  });
};

export const alertMessageDelete = async () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton:
        "bg-green-700 m-2 py-2 px-4 rounded-full text-white font-bold",
      cancelButton:
        "bg-red-700 m-2 py-2 px-4 rounded-full text-white font-bold",
    },
    buttonsStyling: false,
  });

  const res = await swalWithBootstrapButtons.fire({
    title: "¿Estas seguro?",
    text: "El registro se eliminará permanentemente!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Si, borrar!",
    cancelButtonText: "No, cancelar!",
    reverseButtons: true,
  });

  if (res.isConfirmed) {
    swalWithBootstrapButtons.fire(
      "Eliminado!",
      "El registro se eliminó correctamente.",
      "success"
    );
    return true;
  }

  return false;
};
