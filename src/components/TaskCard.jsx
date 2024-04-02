import { useDispatch } from "react-redux"
import { taskMangerActions } from "../store"
import Style from "./css/TaskCard.module.css"
import AddTaskForm from "./AddTaskForm"

const TaskCard = ({ task, addTaskForm, setAddTaskForm, setIsTaskDeleted, isTaskDeleted }) => { //This component is for displaying tasks and form for adding tasks
  const dispatch = useDispatch()

  const handelDelete = (task) => { //function for deleting task on user side
    dispatch(taskMangerActions.deleteTask(task));
    setIsTaskDeleted(!isTaskDeleted);
  }
  const handelComplete = (task) => { //function for marking task as completed on user side
    dispatch(taskMangerActions.completedTask(task));
    dispatch(taskMangerActions.deleteTask(task));
  }
  return (
    <>
      {addTaskForm && <AddTaskForm setAddTaskForm={setAddTaskForm} />}

      {!addTaskForm && <div className={`${Style.card}`}>
        {isTaskDeleted && <h1>Task Deleted</h1>}
        {!isTaskDeleted && <>
          <div className={`${Style.top}`}>
            <h2>{task.title} <span></span></h2>
            <hr style={{ margin: "0px" }} />
            <div className={`${Style.dates}`}>
              <p>Created on {task.creationDate}</p>
              <p>Due {task.dueDate}</p>
            </div>
            <p className={`${Style.description}`}>{task.description}</p>
          </div>
          <div className={`${Style.btns}`}>
            <button style={{ background: "red" }} onClick={() => { handelDelete(task) }}>Delete</button>
            <button style={{ background: "green" }} onClick={() => { handelComplete(task) }}>Mark as Completed</button>
          </div>
        </>}
      </div>}
    </>
  )
}

export default TaskCard;