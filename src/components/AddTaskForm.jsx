import Style from "./css/AddTaskForm.module.css"
import { useRef } from "react";
import { taskMangerActions } from "../store";
import { useDispatch } from "react-redux";

const AddTaskForm = ({setAddTaskForm}) => {
  const titleRef = useRef();
  const dueDateRef = useRef();
  const descriptionRef = useRef();
  const dispatch = useDispatch();

  const handelAddTask = (event) => {
    event.preventDefault();
    const task = {
      title: titleRef.current.value,
      dueDate: dueDateRef.current.value,
      description: descriptionRef.current.value,
      isCompleted: false,
      creationDate: new Date().toISOString().slice(0, 10)
    }
    console.log("Working !",task)
    dispatch(taskMangerActions.addTask(task));
    setAddTaskForm(false);
  }

  return (
    <>
      <div className={`${Style.card}`}>
        <form action=""onSubmit={(event)=>{handelAddTask(event)}}>
          <input type="text" placeholder="Title" required ref={titleRef} />
          <hr style={{ margin: "0px" }} />
          <p className={`${Style.date}`}>Due <input type="date" required ref={dueDateRef} /></p>
          <textarea name="" id="" cols="30" rows="10" placeholder="Description" required ref={descriptionRef}></textarea>
          <button type="submit">Add Task</button>
        </form>
      </div>
    </>
  )
}

export default AddTaskForm;