import { useState } from 'react';
import TaskCard from './TaskCard';
import Style from './css/Display.module.css';
import AddTaskForm from './AddTaskForm';
import { useSelector } from 'react-redux';

const Display = ({displaySideBar}) => {
  console.log(displaySideBar);
  const tasksObj = useSelector(state => state.taskManger);
  const tasks = tasksObj.tasks;
  const [addTaskForm, setAddTaskForm] = useState(false);
  
  return (
    <>
      <div className={`${Style.container} ${Style[displaySideBar]}`}>
        <div className={`${Style.top}`}>
          <h1>Your Tasks</h1>
          <button onClick={()=>{setAddTaskForm(!addTaskForm)}}>{addTaskForm ? <>Close Form </> : <>Add Task</>}</button>
        </div>

        <div className={`${Style.cards}`}>
          {addTaskForm && <AddTaskForm setAddTaskForm={setAddTaskForm}/>}
          {tasks.length === 0 && <h1>No Tasks</h1>}
          {
            tasks.map((task, index) => {
              return (<TaskCard key={index} task={task} />)
            })
          }
        </div>
      </div>
    </>
  )
}

export default Display;