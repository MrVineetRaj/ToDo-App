import { useDispatch } from "react-redux"
import { taskMangerActions } from "../store"
import Style from "./css/TaskCard.module.css"

const TaskCard = ({ task }) => {
  const dispatch = useDispatch()
  const handelDelete = (task) => {
    dispatch(taskMangerActions.deleteTask(task));
  }

  const checkBoxHandeller = () => {
    return <h1>Great You Task "{task.title}" is completed !</h1>
  }
  return (
    <>
      <div className={`${Style.card}`}>
        <h2>{task.title} <span><input type="checkbox" onClicke={()=>{checkBoxHandeller()}}  /></span></h2>
        <hr style={{ margin: "0px" }} />
        <div className={`${Style.dates}`}>
          <p>Created on {task.creationDate}</p>
          <p>Due {task.dueDate}</p>
        </div>
        <p className={`${Style.description}`}>{task.description}</p>
        <button onClick={()=>{handelDelete(task)}}>Delete</button>
      </div>
    </>
  )
}

export default TaskCard;