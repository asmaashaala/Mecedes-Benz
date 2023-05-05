// Select the "Add Note" button
const addNoteButton = document.getElementById("add-note");

// Add a click event listener to the "Add Note" button
addNoteButton.addEventListener("click", function() {
  // Create a new text area element
  const textarea = document.createElement("textarea");
  textarea.placeholder = "Enter your note here";
  
  // Create a new div to contain the text area and a "Save" button
  const noteDiv = document.createElement("div");
  noteDiv.classList.add("note");
  
  // Add the text area and a "Save" button to the new div
  noteDiv.appendChild(textarea);
  
  const saveButton = document.createElement("button");
  saveButton.innerText = "Save";
  saveButton.addEventListener("click", function() {
    // Get the text from the text area and save it
    const noteText = textarea.value;
    saveNoteToDatabase(noteText); // replace with code to save note to database
    noteDiv.remove(); // remove the note div from the page
  });
  noteDiv.appendChild(saveButton);

  // Add the new note div element to the notes container
  const notesContainer = document.getElementById("notes-container");
  notesContainer.insertBefore(noteDiv, addNoteButton);

  // Add a class to trigger the fade-in animation
  setTimeout(function() {
    noteDiv.classList.add("fade-in");
  }, 10);
});
