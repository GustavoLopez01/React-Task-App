import Swal from "sweetalert2";

export const AlertMessage = () => {

    const alert = () => {
        Swal.fire('Any fool can use a computer')

    }

  return (
    <div>{alert()}</div>
  )
}
