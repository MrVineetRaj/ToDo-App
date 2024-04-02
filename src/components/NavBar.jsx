import { useSelector } from 'react-redux';
import React from 'react';
import Style from './css/NavBar.module.css';
import { jsPDF } from 'jspdf'; // Import jsPDF library
import 'jspdf-autotable';

const SideBar = ({displaySideBar}) => {

  const tasksObj = useSelector(state => state.taskManger);
  const tasks = tasksObj.tasks;

  const downloadTasks = () => {
    if (!tasks || tasks.length === 0) {
      alert('No tasks available to download.');
      return;
    }

    const doc = new jsPDF(); // Create a new jsPDF document
    const headers = ['S.No', 'Title', 'Description', 'Due Date', 'Creation Date', 'Completed',"Done ?"]; // Table headers
    const data = tasks.map((task, index) => ([
      index + 1, // Add serial number
      task.title,
      task.description,
      task.dueDate,
      task.creationDate,
      task.isCompleted ? 'Yes' : 'No', // Display 'Yes' or 'No' for completed status
      "O"
    ]));

    // **Check for jsPDF-autotable (if needed):**
    if (!jsPDF.API.autoTable) {
      console.error('jsPDF autoTable plugin not found. Please install jspdf-autotable.');
      return; // Prevent errors if plugin is missing
    }

    // Add table with options (adjust options as needed)
    doc.autoTable({
      startY: 20, // Start table 20 units from the top
      head: [headers],
      body: data,
      theme: 'grid', // Theme for table (grid, plain, striped, etc.)
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

  const name = "Vineet Raj";
  const email = "abc@example.com";

  return (
    <div className={`${Style.container} ${Style[displaySideBar]}` }>
      <div className={`${Style.top}`}>
        <div>
          <img src="/vite.svg" alt="Loading..." />
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
