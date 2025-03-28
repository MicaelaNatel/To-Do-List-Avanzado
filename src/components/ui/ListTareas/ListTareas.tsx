import { FC } from "react";
import styles from "./ListTareas.module.css";
import { ITarea } from "../../../types/ITarea";
import TaskEyeButton from "../TaskEyeButton/TaskEyeButton";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";


type IPropsITarea = {
  tarea: ITarea;
};

const ListTareas: FC<IPropsITarea> = ({ tarea }) => {
  return (
    <div className={styles.tarea}>
      <div className={styles.containerRow}>
        <span className={styles.titulo}>Título: {tarea.titulo}</span>
        <span className={styles.descripcion}>Descripción: {tarea.descripcion}</span>
        <span className={styles.fecha}>
        Fecha Límite: {new Date(tarea.fechaLimite).toISOString().split("T")[0]}
        </span>
        <button className={styles.enviar}>
          Enviar a <img src="./send.svg" alt="" />
        </button>
        <div className={styles.selectContainer}>
          <select className={styles.select}>
            <option>Seleccione un Sprint</option>
          </select>
        </div>
        <div className={styles.acciones}>
          <TaskEyeButton />
          <EditButton />
          <DeleteButton />
        </div>
      </div>
    </div>
  );
};

export default ListTareas;
