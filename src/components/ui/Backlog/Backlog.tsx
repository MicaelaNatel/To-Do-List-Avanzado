import { ITarea } from "../../../types/ITarea";
import ListTareas from "../ListTareas/ListTareas";
import styles from "./Backlog.module.css";

const Backlog = () => {
  const tareaEjemplo: ITarea = {
    titulo: "Tarea",
    descripcion: "Realizar",
    fechaLimite: new Date(),
  };

  return (
    <div className={styles.containerBacklog}>
      <div className={styles.headerBacklog}>
        <h2 className={styles.title}>Backlog</h2>
        <button className={styles.buttonTask}>
          Crear nueva tarea <img src="./list.svg" alt="" />
        </button>
      </div>

      <ListTareas tarea={tareaEjemplo} />
    </div>
  );
};

export default Backlog;
