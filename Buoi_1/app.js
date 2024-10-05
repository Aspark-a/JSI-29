import Home from "./page/home.js";

class App {
    constructor() {
        this.mainContainer = document.getElementById("app"); 
    }

    renderComponent(component) {
        thí.mainContainer.innerHTML = "";
        this.component.render(this.mainContainer);
    }
}

const home = new Home();
const login = new Login();
// 1 project = 1 app
const app = new App();
// render giao dien
app.renderComponent(login);

export default app;