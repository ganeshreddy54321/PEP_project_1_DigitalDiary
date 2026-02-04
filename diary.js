let notes = JSON.parse(localStorage.getItem("notes")) || [];
displayNotes();
function addNote() {
    let noteInput = document.getElementById("noteInput");
    let noteText = noteInput.value.trim();

    if (noteText === "") {
        alert("Please write a note!");
        return;
    }

    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));

    noteInput.value = "";
    displayNotes();
}

function displayNotes() {
    let notesList = document.getElementById("notesList");
    notesList.innerHTML = "";

    notes.forEach((note, index) => {
        let div = document.createElement("div");
        div.className = "note";

        div.innerHTML = `
            <div class="note-text">${note}</div>
            <button class="edit-btn" onclick="editNote(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>
        `;

        notesList.appendChild(div);
    });
}

function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}

function editNote(index) {
    let updatedNote = prompt("Edit your note:", notes[index]);

    if (updatedNote !== null && updatedNote.trim() !== "") {
        notes[index] = updatedNote;
        localStorage.setItem("notes", JSON.stringify(notes));
        displayNotes();
    }
}
