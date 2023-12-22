import {
  update,
  ref,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { db } from "./index.js";

export function UpdateData(
  enterTitle,
  enterGenre,
  enterReleaseDate,
  enterWatched
) {
  update(ref(db, "Movies/" + enterTitle), {
    Title: enterTitle,
    Genre: enterGenre,
    Releasedate: enterReleaseDate,
    watched: enterWatched.checked,
  })
    .then(() => {
      alert("Data updated successfully!");
    })
    .catch((error) => {
      alert(error);
    });
}

// delade upp funktionerna. Kan se att de blir lättare för felsökande och lättare om man ska bygga vidare på funktionerna.
