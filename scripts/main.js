let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name: ");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Welcome ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome ${storedName}`;
}

let myButton = document.querySelector("button");
myButton.onclick = () => setUserName();
