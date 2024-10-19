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
      addTaskForm.addEventListener("click", async function (event) {
        // get button add
        const add_btn = event.target.closet("#add-task-btn");
        if (add_btn) {
          await this.addTask().bind(this)
        }
      });
    // add vao main
    main.appendChild(addTaskForm);
    // bat su kien

    // list task -----------------------------------------------
    const pre = document.createElement("pre");
    main.appendChild(pre);

    const taskList = document.createElement("div");
    taskList.classList.add("list-group");
    await.this.getTasks();
    print()
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

  async getTasks() {
    // todo
    // get all task list in firestore
    const querySnapshot = await getDocs(collection(database, "tasks"));
    const results = [];
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      if (doc.data()["created_by"] === this.currentUser.uid) {
        results.push(doc);
        str = "";
        switch (doc.data()["status"]) {
          case "cancel":
            str += `<a
        class="list-group-item list-group-item-action disabled" id="${doc.id}"
        aria-disabled="true">${doc.data()["name"]}</a>`;
            break;
          case "finished":
            str += `<a class="list-group-item list-group-item-secondary" id="${
              doc.id
            }">${doc.data()["name"]}</a>
`;
            break;
          default:
str += `<a href="#" class="list-group-item list-group-item-action" id="${
              doc.id
            }">${doc.data()["name"]}</a>`;
            break;
        }
      }
      results.push(str);
    });
    this.$taskList = [...results];
  }

  async addTask() {
    // todo
    // get data from add task form
    task_name = document.getElementById("task").ariaValueMax.trim();
    try {
      const docRef = await addDoc(collection(db, "users"), {
        created_at: new Date.now(),
        created_by: "bH9kbeOFq7YYGyoiPxxXsL6rtcC2",
        name: "ABC",
        status: "due",
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  gotoHome() {
    const home = new Home();
    app.renderComponent(home);
  }

  checkCurrentUser() {}

  getToDoListByUserId(userId) {}
}
