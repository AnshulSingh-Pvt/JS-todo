function addTask(){
    const textbox = document.getElementById("textbox");

    // Check if the textbox is empty or not
    if(textbox.value.trim() === ""){
        return(
            alert("Please enter a task")
        );
    }

    // create list item
    let listItem = document.createElement("li");
    listItem.textContent = textbox.value;

    // setup onclick event to remove item whwn clicked
    listItem.onclick = function(){
        listItem.remove();
    };

    // append list item to the tasklist
    let tasklist = document.getElementById("tasklist");
    tasklist.appendChild(listItem);

    // clear the textbox after adding the task
    textbox.value = "";
}

