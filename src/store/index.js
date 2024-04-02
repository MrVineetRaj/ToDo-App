import { configureStore, createSlice } from '@reduxjs/toolkit';

//these tasks are initial value of the tasks in case user  don't have any task in his localstorage
const tasks = [
  {
    "title": "Learn MERN !",
    "dueDate": "2024-04-04",
    "description": "complete MERN stack by 15 April",
    "isCompleted": false,
    "creationDate": "2024-04-02"
  },
  {
    "title": "Software Engineering",
    "dueDate": "2024-04-04",
    "description": "have to prepare for this class test",
    "isCompleted": false,
    "creationDate": "2024-04-02"
  },
  {
    "title": "Bike Servicing",
    "dueDate": "2024-04-04",
    "description": "i must have to go for bike servicing on 3rd of march",
    "isCompleted": false,
    "creationDate": "2024-04-02"
  }]


const localStorageKey = 'myTasks'; // ikey for stored local storage element

const loadTasksFromLocalStorage = () => { //this fuction is checking if there is any task in localstorage or not
  try {
    const serializedTasks = localStorage.getItem(localStorageKey);
    if (serializedTasks) {
      return JSON.parse(serializedTasks); // if there is then its returning back those tasks
    }
    return tasks; // else returning default tasks
  } catch (error) {
    console.error('Error loading tasks from localStorage:', error);
    return tasks; // even on error returning default tasks
  }
};

const saveTasksToLocalStorage = (tasks) => {
  try {
    const serializedTasks = JSON.stringify(tasks); // Converting to JSON string
    localStorage.setItem(localStorageKey, serializedTasks);
  } catch (error) {
    console.error('Error saving tasks to localStorage:', error);
  }
};

const INITIAL_STATE = {  //defining initial state
  tasks: loadTasksFromLocalStorage(),
  completedTasks: [] // not storing completed task inn local storage as it is already completed so not necessary
}
const taskSlice = createSlice({ //creating slice
  name: "taskManger",
  initialState: INITIAL_STATE,
  reducers: {
    addTask: (state, action) => { //adding task
      state.tasks.unshift(action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    deleteTask: (state, action) => { //deleting task
      state.tasks = state.tasks.filter(task => task.title !== action.payload.title);
      saveTasksToLocalStorage(state.tasks);
    },
    completedTask: (state, action) => {//adding completed task
      state.completedTasks.unshift(action.payload);
      saveTasksToLocalStorage(state.tasks);
    }
  }
})


const store = configureStore({
  reducer: {
    taskManger: taskSlice.reducer
  }
});

export const taskMangerActions = taskSlice.actions;
export default store;
