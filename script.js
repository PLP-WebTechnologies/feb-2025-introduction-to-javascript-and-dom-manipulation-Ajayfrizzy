document.addEventListener("DOMContentLoaded", () => {
    const changeTextBtn = document.getElementById("changeTextBtn");
    const toggleBoxBtn = document.getElementById("toggleBoxBtn");
    const addElementBtn = document.getElementById("addElementBtn");
    const removeElementBtn = document.getElementById("removeElementBtn");

    // Change text dynamically
    changeTextBtn.addEventListener("click", () => {
        document.getElementById("description").textContent = "The text has been changed!";
    });

    // Toggle box color and style
    toggleBoxBtn.addEventListener("click", () => {
        let box = document.getElementById("box");
        box.style.backgroundColor = box.style.backgroundColor === "blue" ? "red" : "blue";
        box.style.color = "white";
        box.style.padding = "20px";
    });

    // Add a new element
    addElementBtn.addEventListener("click", () => {
        let newElement = document.createElement("p");
        newElement.textContent = "This is a new paragraph!";
        newElement.classList.add("added-text");
        document.getElementById("container").appendChild(newElement);
    });

    // Remove the last added element
    removeElementBtn.addEventListener("click", () => {
        let container = document.getElementById("container");
        if (container.lastChild) {
            container.removeChild(container.lastChild);
        }
    });
});
