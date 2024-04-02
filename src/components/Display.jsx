import { useState } from 'react';
import TaskCard from './TaskCard';
import Style from './css/Display.module.css';
import { useSelector } from 'react-redux';

const Display = ({ displaySideBar }) => {
  const tasksObj = useSelector(state => state.taskManger); //fetching tasks from redux store
  const tasks = tasksObj.tasks;
  const completeTasksObj = useSelector(state => state.taskManger); //fetching completed tasks from redux store
  const completeTasks = completeTasksObj.completedTasks;

  const [addTaskForm, setAddTaskForm] = useState(true); //for toggling add task form
  const [taskToDisplay, setTaskToDisplay] = useState({});  //for displaying task on right side



  const [isTaskDeleted, setIsTaskDeleted] = useState(false);

  const viewTaskHandler = (task) => { //function for view task button 
    setAddTaskForm(false);
    setTaskToDisplay(task);
    setIsTaskDeleted(false);
  }
  return (
    <>
      <div className={`${Style.container} ${Style[displaySideBar]}`}>
        {/* This is defining top div  */}
        <div className={`${Style.top}`}>
          <h1>Your Tasks</h1>
          <button onClick={() => { setAddTaskForm(!addTaskForm) }}>{addTaskForm ? <>Close Form </> : <>Add Task</>}</button>
        </div>
        {/* This is for displaying tasks,forms etc*/}
        <div className={`${Style.bottom}`}>
          <div className={`${Style.completelist}`}>
            <div className={`${Style.completedTasks}`}>
              <div className={`${Style.list}`}>
                {console.log(tasks)}
                {tasks && tasks.length > 0 ? tasks.map((task, index) => { {/* using map to  print all the tasks in a list formate*/}
                  return (<p key={index}> <span>{task.title}</span> <button onClick={() => { viewTaskHandler(task) }}>View Task</button></p>)
                }) : <h3>No tasks to display</h3>} {/* if tasks is empty then will print this*/}
              </div>
            </div>
            <h3>Completed Tasks</h3>
            <div className={`${Style.completedTasks}`}>
              <div className={`${Style.list}`}>
                {completeTasks && completeTasks.length > 0 ? completeTasks.map((task, index) => {
                  return (<p key={index}> <span>{task.title}</span> <button onClick={() => { viewTaskHandler(task) }}>View Task</button></p>)
                }) : <h4>No tasks to display</h4>}{/* if completed tasks is empty then will print this*/}
              </div>
            </div>
          </div>
          <div className={`${Style.taskDisplay}`}>
            <TaskCard task={taskToDisplay} addTaskForm={addTaskForm} setAddTaskForm={setAddTaskForm} setIsTaskDeleted={setIsTaskDeleted} isTaskDeleted={isTaskDeleted} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Display;