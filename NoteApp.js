const createNote = document.querySelector(".createNote");
const input = document.querySelector(".input");

function showNote(){
    input.innerHTML = localStorage.getItem("note");
}

function updateNote() {
    localStorage.setItem("note", input.innerHTML);
}

showNote();

    createNote.addEventListener("click", () => {
    const text = document.createElement("p");
    const img = document.createElement("img")
    const div = document.createElement("div");

    text.className = "text";
    text.contentEditable ="true";
    img.src = "garbage-1708863.svg";
    img.className = "remove";
    div.className = "focus";

    input.appendChild(div).appendChild(text)
    div.appendChild(img);
    updateNote();
});

input.addEventListener("click", e => {
    if(e.target.className === "remove"){
        e.target.parentElement.remove();
        updateNote();
    }

    else if(e.target.className === "text"){
        const note = document.querySelectorAll(".text");
        note.forEach( nt => {
            nt.onkeyup = function (){
                updateNote();
            }
        })
    }
});

document.addEventListener("keydown", enter => {
    if(enter.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

