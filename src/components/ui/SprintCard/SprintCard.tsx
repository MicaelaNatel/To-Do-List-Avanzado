import { FC } from "react";
import { ISprint } from "../../../types/ISprint";
import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";
import TaskEyeButton from "../TaskEyeButton/TaskEyeButton";
import styles from "./SprintCard.module.css";

type IPropsSprintCard = {
  sprint: ISprint;
};

const SprintCard: FC<IPropsSprintCard> = (sprint) => {
  return (
    <div className={styles.sprintCard}>
      <div className={styles.sprintCardHeader}>{sprint.sprint.nombre}</div>
      <div className={styles.sprintCardInfo}>
        <div>Inicio: {new Date(sprint.sprint.inicio).toISOString().split("T")[0]}</div>
        <div>Cierre: {new Date(sprint.sprint.fin).toISOString().split("T")[0]}</div>
      </div>
      <div className={styles.sprintCardButtons}>
        <TaskEyeButton />
        <EditButton />
        <DeleteButton />
      </div>
    </div>
  );
};

export default SprintCard;