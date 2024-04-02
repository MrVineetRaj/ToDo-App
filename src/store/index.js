import {configureStore, createSlice} from '@reduxjs/toolkit';

const tasks = [
  {
    "title": "sleep !",
    "description": "Go to bed at 9:00pm",
    "dueDate": "23 march",
    "isCompleted": false,
    "creationDate": "26 March"
  },
  {
    "title": "Complete Assignment !",
    "description": "2 assignments of SE and 2 of os and 1 of DC",
    "dueDate": "29 march",
    "isCompleted": false,
    "creationDate": "26 March"
  },
  {
    "title": "Learn Trading !",
    "description": "Cover Lectures of the bullish bull master",
    "dueDate": "24 march",
    "isCompleted": false,
    "creationDate": "26 March"
  },
  {
    "title": "study !",
    "description": "Cover Syllabus for good academics",
    "dueDate": "1 april",
    "isCompleted": false,
    "creationDate": "26 March"
  },
  {
    "title": "Learn Mern !",
    "description": "Cover Syllabus for good academics",
    "dueDate": "1 april",
    "isCompleted": false,
    "creationDate": "26 March"
  },
  {
    "title": "Complet DSA!",
    "description": "Cover Syllabus for good academics",
    "dueDate": "1 april",
    "isCompleted": false,
    "creationDate": "26 March"
  }
  
  ,{
    "title": "sleep !",
    "description": "Go to bed at 9:00pm",
    "dueDate": "23 march",
    "isCompleted": false,
    "creationDate": "26 March"
  },
  {
    "title": "Complete Assignment !",
    "description": "2 assignments of SE and 2 of os and 1 of DC",
    "dueDate": "29 march",
    "isCompleted": false,
    "creationDate": "26 March"
  },
  {
    "title": "Learn Trading !",
    "description": "Cover Lectures of the bullish bull master",
    "dueDate": "24 march",
    "isCompleted": false,
    "creationDate": "26 March"
  },
  {
    "title": "study !",
    "description": "Cover Syllabus for good academics",
    "dueDate": "1 april",
    "isCompleted": false,
    "creationDate": "26 March"
  },
  {
    "title": "Learn Mern !",
    "description": "Cover Syllabus for good academics",
    "dueDate": "1 april",
    "isCompleted": false,
    "creationDate": "26 March"
  },
  {
    "title": "Complet DSA!",
    "description": "Cover Syllabus for good academics",
    "dueDate": "1 april",
    "isCompleted": false,
    "creationDate": "26 March"
  }
  
  
]
const INITIAL_STATE = {
  tasks: tasks
}
const counterSlice = createSlice({
  name:"taskManger",
  initialState: INITIAL_STATE,
  reducers: {
    addTask: (state, action) => {
      state.tasks.unshift(action.payload);
    },
    deleteTask:(state, action) => {
      console.log("Clicked !")
      state.tasks = state.tasks.filter(task => task.title !== action.payload.title);
    }
  }
})


const store = configureStore({reducer:{
  taskManger: counterSlice.reducer
}});

export const taskMangerActions = counterSlice.actions;
export default store;



// const taskReducer = (state = INITIAL_STATE, action) => {
//   let newState = state;
//   if(action.type === 'ADD_TASK') {
//     newState = {
//       ...state,
//       tasks: [...state.tasks, action.payload]
//     }
//   }
//   return newState;
// }
