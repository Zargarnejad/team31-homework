//********** Save a note ************/

const notes = [];

function saveNote(content, id) {
  notes.push({ content: content, id: id });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Read a new book", 3);
saveNote("Study more", 4);
saveNote("Do Homework", 5);

console.log(notes);

//********** Get a note ************/

function getNote(id) {
  if (typeof id != "number" || typeof id == "undefine") {
    console.log(" ERROR ! id undefined ");
  } else {
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id == id) {
        return notes[i];
      }
    }
  }
}

const firstNote = getNote(1);
const secondNote = getNote(3);
console.log(firstNote);
console.log(secondNote);

//********** Log out notes ************/
function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`
    );
  }
}

logOutNotesFormatted();

//********** Unique feature: Delete a note ************/

function deleteNote(id) {
  if (typeof id != "number" || typeof id == "undefine") {
    console.log(" ERROR ! id undefined ");
  } else {
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id == id) {
        return notes.splice(i, 1);
      }
    }
  }
}

let deleteResult = deleteNote(2);
console.log(deleteResult);
deleteResult = deleteNote(4);
console.log(deleteResult);

//********** Unique feature: Update a note ************/

function updateNote(content, id) {
  if (typeof id != "number" || typeof id == "undefine") {
    console.log(" ERROR ! id undefined ");
  } else {
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id == id) {
        notes[i].content = content;
        break;
      }
    }
  }
}
const updatedNote = updateNote("Cook a cake", 1);
console.log(notes);
