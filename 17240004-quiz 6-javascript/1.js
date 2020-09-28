let input = document.getElementById("taskDescription");
let addBtn = document.getElementById('addBtn');
let tasksDiv = document.getElementById('tasksDiv');
addBtn.addEventListener('click', function () {
    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    h4.textContent = "Invitee Name";
    let button = document.createElement("button");
    button.textContent = "Confirm";
    button.classList.add("bg-success", "mt-4", "p-3" ,"text-white");
    h4.innerHTML = input.value;
    div.classList.add("card", "mt-4", "p-3");
    div.append(h4, button);
    // console.log(div);
    tasksDiv.appendChild(div);
});
