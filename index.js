import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

import { firebaseConfig, app } from "./config.js";
import { InsertData } from "./insert.js";
import { UpdateData } from "./update.js";
import { RemoveData } from "./remove.js";
import { FindData, ShowAllMovies } from "./find.js";

export const db = getDatabase();

let enterTitle = document.querySelector("#enterTitle");
let enterGenre = document.querySelector("#enterGenre");
let enterReleaseDate = document.querySelector("#enterReleaseDate");
let findTitles = document.querySelector("#findTitles");
let findTitle = document.querySelector("#findTitle");
let findGenre = document.querySelector("#findGenre");
let findReleaseDate = document.querySelector("#findReleaseDate");
let enterWatched = document.querySelector("#enterWatched");

let insertBtn = document.querySelector("#insert");
let updateBtn = document.querySelector("#update");
let removeBtn = document.querySelector("#remove");
let findBtn = document.querySelector("#find");
let showAllBtn = document.querySelector("#showAllBtn");

insertBtn.addEventListener("click", () =>
  InsertData(
    enterTitle.value,
    enterGenre.value,
    enterReleaseDate.value,
    enterWatched
  )
);
updateBtn.addEventListener("click", () =>
  UpdateData(
    enterTitle.value,
    enterGenre.value,
    enterReleaseDate.value,
    enterWatched
  )
);

showAllBtn.addEventListener("click", ShowAllMovies);
removeBtn.addEventListener("click", () => RemoveData(enterTitle.value));
findBtn.addEventListener("click", () => FindData(findTitles.value));

// delade upp funktionerna. Kan se att de blir lättare för felsökande och lättare om man ska bygga vidare på funktionerna.
