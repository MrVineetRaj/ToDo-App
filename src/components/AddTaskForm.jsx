import Style from "./css/AddTaskForm.module.css"
import { useRef } from "react";
import { taskMangerActions } from "../store";
import { useDispatch} from "react-redux";


const AddTaskForm = ({ setAddTaskForm }) => {
  const titleRef = useRef(); //for accessing most recent value or title ,dueDate and description
  const dueDateRef = useRef();
  const descriptionRef = useRef();
  const dispatch = useDispatch();

  const handelAddTask = (event) => { // handling add task form
    event.preventDefault();
    const task = {  //creating task object for payload for redux store 
      title: titleRef.current.value,
      dueDate: dueDateRef.current.value,
      description: descriptionRef.current.value,
      isCompleted: false,
      creationDate: new Date().toISOString().slice(0, 10)
    }
    dispatch(taskMangerActions.addTask(task)); //dispatching action to add task
    setAddTaskForm(false); //for removing addTaskForm from display
  }

  return (
    <>
      <div className={`${Style.card}`}>
        <form action="" onSubmit={(event) => { handelAddTask(event) }}>
          <div>
            <legend><h3>Add Task !</h3></legend>
            <input type="text" placeholder="Title" required ref={titleRef} />
            <p className={`${Style.date}`}>Due <input type="date" required ref={dueDateRef} /></p>
            <textarea name="" id="" cols="30" rows="10" placeholder="Description" required ref={descriptionRef}></textarea>
          </div>
          <button type="submit">Add Task</button>
        </form>
      </div>
    </>
  )
}

export default AddTaskForm;