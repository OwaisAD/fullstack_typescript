export function setupAlert(container: HTMLDivElement) {
  const myInput = document.createElement("input");
  myInput.placeholder = "What is your name?";

  const myButton = document.createElement("button");
  myButton.innerHTML = "click here";
  myButton.onclick = function () {
    alert("Hello " + myInput.value);
  };

  container.appendChild(myInput);
  container.appendChild(myButton);
}
