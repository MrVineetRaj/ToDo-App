import { useSelector } from 'react-redux';
import React from 'react';
import Style from './css/NavBar.module.css';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const SideBar = ({displaySideBar}) => {

  const tasksObj = useSelector(state => state.taskManger); //fetching tasks from redux store
  const tasks = tasksObj.tasks;

  const downloadTasks = () => { //function to download tasks in pdf format
    if (!tasks || tasks.length === 0) {
      alert('No tasks available to download.');
      return;
    }

    const doc = new jsPDF(); // Create a new jsPDF document
    const headers = ['S.No', 'Title', 'Description', 'Due Date', 'Creation Date',"Done ?"]; // Table headers
    const data = tasks.map((task, index) => {
      if (!task) {
        console.error(`Task at index ${index} is undefined or null.`);
        return null;
      }
      return [
        index + 1, // for  adding serial number
        task.title,
        task.description,
        task.dueDate,
        task.creationDate,
        "O"
      ];
    }).filter(item => item); // This will remove any null values from the array
    

    // **Checking for jsPDF-autotable (if needed):**
    if (!jsPDF.API.autoTable) {
      console.error('jsPDF autoTable plugin not found. Please install jspdf-autotable.');
      return; // Prevent errors if plugin is missing
    }

    // Add table to the document
    doc.autoTable({
      startY: 20, // Start table 20 units from the top
      head: [headers],
      body: data,
      theme: 'grid', // Theme for table 
      styles: {
        fontSize: 11, // Font size for table content
        cellPadding: 5, // Padding for cells
        halign: 'center', // Horizontal alignment for columns
        valign: 'middle', // Vertical alignment for cells
      },
    });

    const filename = 'tasks.pdf'; // Download file name
    doc.save(filename); // Download the PDF document
  };

  const name = "Vineet Raj"; // Name of the user
  const email = "abc@example.com";// Email of the user

  return (
    <div className={`${Style.container} ${Style[displaySideBar]}` }>
      <div className={`${Style.top}`}>
        <div>
          <img src="/vite.svg" alt="Loading..." />{/* image of the user */}
        </div>
        <div>
          <h3>{name}</h3>
          <h3>{email}</h3>
        </div>
      </div>
      <div className={`${Style.bottom}`}>
        <button onClick={downloadTasks}>Download Tasks</button>
      </div>
    </div>
  );
};

export default SideBar;
