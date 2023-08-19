function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    input.value = "";
  
    if (task === "") {
        alert("Please enter a task!");
        return;
    }
  
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    taskList.appendChild(li);
}


var input = document.getElementById("taskInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
    alert("hello!");
    // document.getElementById("myBtn").click();
  }
});