import Nav from "../components/nav.js";
import Footer from "../components/footer.js";

export default class Home {
  constructor() {
    this.checkCurrentUser = localStorage.getItems("currentUser");
    if (this.currentUser) {
      const login = new Login();
      app.renderComponent(login);
    } else {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
    this.nav = new Nav();
    this.footer = new Footer();
  }
  render(mainContainer) {
    // add nav
    this.nav.render(mainContainer);
    // tao main tag 
    const main = document.createElement("main");
    main.classList.add("container");

    // add task form ------------------------------------
    const addTaskForm = document.createElement("form");
    addTaskForm.innerHTML = `
      <div class="mb-3">
        <label for="task" class="form-label">Add task</label>
        <input
          type="text"
          class="form-control"
          id="task"
          name="task"
          aria-describedby="emailHelp"
        />
      </div>
      <button type="submit" class="btn btn-primary" id="add-task-btn">Submit</button>`;

    // add vao main
    main.appendChild(addTaskForm);
    // bat su kien

    // list task -----------------------------------------------
    const pre = document.createElement("pre");
    main.appendChild(pre);

    const taskList = document.createElement("div");
    taskList.classList.add("list-group");
    taskList.innerHTML = `<a
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
      >`;

    // add vao main
    main.appendChild(taskList);

    // add main
    mainContainer.appendChild(main);
    // add footer
    this.footer.render(mainContainer);
  }

  addTask() {
    console.log("first");
  }

  checkCurrentUser() {}

  getToDoListByUserId(userId) {}
}
