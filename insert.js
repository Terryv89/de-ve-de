import {
  set,
  get,
  ref,
  child,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { db } from "./index.js";

export function InsertData(
  enterTitle,
  enterGenre,
  enterReleaseDate,
  enterWatched
) {
  const movieRef = child(ref(db, "Movies"), enterTitle);

  get(movieRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        alert("Movie already exists in the database!");
      } else {
        set(movieRef, {
          Title: enterTitle,
          Genre: enterGenre,
          Releasedate: enterReleaseDate,
          watched: enterWatched.checked,
        })
          .then(() => {
            alert("Data added successfully!");
          })
          .catch((error) => {
            alert(error);
          });
      }
    })
    .catch((error) => {
      alert(error);
    });
}

// delade upp funktionerna. Kan se att de blir lättare för felsökande och lättare om man ska bygga vidare på funktionerna.
