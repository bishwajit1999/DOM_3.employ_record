// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    const form = document.querySelector('form');
    const tbody = document.querySelector('tbody');
  
    // Listen for form submission
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the form from submitting and refreshing the page
  
      // Get input values
      const name = document.getElementById('name').value;
      const employeeID = document.getElementById('employeeID').value;
      const department = document.getElementById('department').value;
      const experience = document.getElementById('exp').value;
      const email = document.getElementById('email').value;
      const mobile = document.getElementById('mbl').value;
  
      // Validate input (you can add more validation as needed)
      if (!name || !employeeID || !department || !experience || !email || !mobile) {
        alert('Please fill in all fields.');
        return;
      }
  
      // Create a new row for the table
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${name}</td>
        <td>${employeeID}</td>
        <td>${department}</td>
        <td>${experience} years</td>
        <td>${email}</td>
        <td>${mobile}</td>
        <td><button onclick="deleteRow(this)">Delete</button></td>
      `;
  
      // Append the new row to the table
      tbody.appendChild(newRow);
  
      // Clear the form
      form.reset();
    });
  });
  
  // Function to delete a row
  function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  