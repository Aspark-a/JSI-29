import Nav from "./components/nav.js"

class App {
    constructor(component) {
        this.component = component;
        this.mainContainer = document.getElementById("app"); 
    }

    renderComponent() {
        this.component.render(this.mainContainer);
    }
}

const nav = new Nav ();

// 1 project = 1 app
const app = new App(nav)
// render giao dien
app.renderComponent();

export default app;