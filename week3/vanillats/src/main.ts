import "./style.css";
import typescriptLogo from "./typescript.svg";
import { setupCounter } from "./counter";
import { setupAlert } from "./alerter";
import { setupTable } from "./Person";
import { getPeople } from "./Person";
import { renderPeopleList } from "./peopleList";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div class="alerter">
     </div>
     <div class="table"></div>
     <div class="part3people"></div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

setupAlert(document.querySelector<HTMLDivElement>(".alerter")!);

setupTable(document.querySelector<HTMLDivElement>(".table")!);

async function displayPeople() {
  const people = await getPeople();
  renderPeopleList(document.querySelector<HTMLDivElement>(".part3people")!, people);
}

displayPeople();
