export default  Home {
    constructor(){
        this.nav = new Nav();
        this.footer - new Footer()
    }
    render(mainContainer) {
       this.nav.render(mainContainer)
        const main = document.createElement("main")

        const addTaskForm = document.createElement("form")
        addTaskForm.innerHTML = `
      <div ="mb-3">
        <label for="task" ="form-label">Add task</label>
        <input
          type="text"
          ="form-control"
          id="task"
          name="task"
          aria-describedby="emailHelp"
        />
      </div>
      <button type="submit" ="btn btn-primary" id="add-task-btn">Submit</button>
      `
// add vao main
main.appendChild(addTaskForm);

const pre = document.createElement("pre");
main.appendChild(pre);
main.classList.add("container");

const taskList = document.createElement("list")
taskList.classList.add("list-group")
taskList.innerHTML = `
<a
        href="#"
        class="list-group-item list-group-item-action active"
        aria-current="true"
      >
        The current link item
      </a>
      <a href="#" class="list-group-item list-group-item-action"
        >A second link item</a
      >
      <a href="#" class="list-group-item list-group-item-action"
        >A third link item</a
      >
      <a href="#" class="list-group-item list-group-item-action"
        >A fourth link item</a
      >
      <a
        class="list-group-item list-group-item-action disabled"
        aria-disabled="true"
        >A disabled link item</a
      >`
      main.appendChild(taskList)

// bat su kien cho button add task
addTaskForm
//   .closest("#add-task-btn")
//   .addEventListener("click", this.addTask);
        mainContainer.appendChild("main")
        this.footer.render(mainContainer);
    }

    addTask() {
        console.log("first");
    }

    checkCurrentUSer() {}

    getToDoListbyUserId(userId){}

};
