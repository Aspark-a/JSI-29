export default class Nav {
    constructor() {
    }

    render(mainContainer) {
        const nav = document.createElement("nav");
        nav.classList.add("navbar", "bg-body-teritary");
    
        const divContainer = document.createElement("div");
        divContainer.classList.add("container-fluid");
    
        const logoLink = document.createElement("a");
        logoLink.classList.add("navbar-brand");
        logoLink.innerText = "TodoList";
        // bat su kien cho link
        logoLink.href = "./index.html";
        // add in div container
        divContainer.appendChild(logoLink);

        const divButton = document.createElement("div");
        divButton.classList.add("d-flex");

        const loginButton = document.createElement("button");
        loginButton.classList.add("btn", "btn-outline-success");
        // bat su kien cho nut login
        loginButton.innerText = this.checkLogin(loginButton);
        
        //add button vo div button
        divButton.appendChild(loginButton);
        // add div button vo container
        divContainer.appendChild(divButton);

        // add container vao nav
        nav.appendChild(divContainer);

        mainContainer.appendChild(nav);
    }

    checkLogin(loginButton) {
        // check current user in localStorage
        const currentUser = JSON.parse(localStorage.getItem("currentUSer"));
        if (currentUser) {
            // bat su kien button
            loginButton.onclick = this.gotoLogout;
            return "Logout";
        } else {
            // bat su kien button
            loginButton.onclick = this.gotoLogin;
            return "Login";
        }
    }

        gotoLogin() {
            window.location.href = "../page/login.html";
        }

        gotoLogout() {
            localStorage.removeItem("currentUser")
            window.location.href="../page/index.html";
        }
    
}

