import { ISprint } from "../../../types/ISprint";
import SprintCard from "../SprintCard/SprintCard";
import styles from "./SprintsAside.module.css";

const SprintsAside = () => {
  const sprint: ISprint = {
    nombre: "Sprint 2",
    inicio: new Date("2025-03-04"),
    fin: new Date("2025-03-11"),
  };


  return (
    <div className={styles.containerAsideWrapper}>

      <div className={styles.fullHeightBox}>
        <button className={styles.buttonBacklog}>
          Backlog <img src="./book.svg" alt="" />
        </button>

        <div className={styles.containerAside}>
          <div className={styles.containerTitleButton}>
            <h3 className={styles.title}>
              Lista de sprints <img src="./list.svg"/>
              
            </h3>
          </div>

          <div className={styles.line}></div>

          <div className={styles.sprintCardContainer}>
            <SprintCard sprint={sprint} />
          </div>
        </div>
      </div>
    </div>
  );
};


export default SprintsAside;