/* -------------------------
   JS VARIABLES, OBJECTS, ARRAYS
--------------------------*/

let userList = [];

let personExample = {
    name: "John",
    age: 21
};

let numbers = [10, 20, 30];

/* -------------------------
   EVENTS + DOM MANIPULATION
--------------------------*/

function submitName() {
    let name = document.getElementById("username").value;

    if (name === "") {
        alert("Please enter a name!");
        return;
    }

    userList.push(name);

    document.getElementById("welcomeMessage").innerHTML =
        `Hello, <b>${name}</b>! Welcome to the full example.`;

    console.log("User List:", userList);
}

function alertFixed() {
    alert("This is a fixed button!");
}
