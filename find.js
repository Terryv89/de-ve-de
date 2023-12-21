import {
  get,
  ref,
  child,
  update as updateDatabase,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { db } from "./index.js";

export function FindData(findTitle) {
  const dbref = ref(db);

  const findTitleElement = document.querySelector("#findTitle");
  const findGenreElement = document.querySelector("#findGenre");
  const findReleaseDateElement = document.querySelector("#findReleaseDate");
  const findWatchedElement = document.querySelector("#findWatched");

  get(child(dbref, "Movies/" + findTitle))
    .then((snapshot) => {
      if (snapshot.exists()) {
        findTitleElement.innerHTML = "Name: " + snapshot.val().Title;
        findGenreElement.innerHTML = "Genre: " + snapshot.val().Genre;
        findReleaseDateElement.innerHTML =
          "ReleaseDate: " + snapshot.val().Releasedate;

        const watchedCheckbox = document.createElement("input");
        watchedCheckbox.type = "checkbox";
        watchedCheckbox.id = "watchedCheckbox";
        watchedCheckbox.checked = snapshot.val().watched || false;

        const watchedLabel = document.createElement("label");
        watchedLabel.htmlFor = "watchedCheckbox";
        watchedLabel.textContent = "Watched";

        findWatchedElement.innerHTML = "";
        findWatchedElement.appendChild(watchedCheckbox);
        findWatchedElement.appendChild(watchedLabel);

        watchedCheckbox.addEventListener("change", () => {
          updateDatabase(ref(db, "Movies/" + findTitle), {
            watched: watchedCheckbox.checked,
          })
            .then(() => {
              alert("Watched status updated successfully!");
            })
            .catch((error) => {
              alert(error);
            });
        });
      } else {
        alert("That movie does not exist in the database");
      }
    })
    .catch((error) => {
      alert(error);
    });
}
