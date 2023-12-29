import {
  get,
  update,
  ref,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { db } from "./index.js";

export async function UpdateData(
  enterTitle,
  enterGenre,
  enterReleaseDate,
  enterWatched
) {
  const movieRef = ref(db, "Movies/" + enterTitle);

  try {
    const snapshot = await get(movieRef);

    if (snapshot.exists()) {
      const existingData = snapshot.val();

      // Jämför input mot db så att vi inte skriver över om vi inte har ändrat något, och updaterar bara det som är ändrat.
      const titleChanged = existingData.Title !== enterTitle;
      const genreChanged = existingData.Genre !== enterGenre;
      const releaseDateChanged = existingData.Releasedate !== enterReleaseDate;
      const watchedChanged = existingData.watched !== enterWatched.checked;

      if (
        titleChanged ||
        genreChanged ||
        releaseDateChanged ||
        watchedChanged
      ) {
        await update(movieRef, {
          Title: enterTitle,
          Genre: enterGenre,
          Releasedate: enterReleaseDate,
          watched: enterWatched.checked,
        });

        alert("Data updated successfully!");
      } else {
        alert("No changes detected. Data not updated.");
      }
    } else {
      alert("Movie not found. Data not updated.");
    }
  } catch (error) {
    alert(error);
  }
}

// delade upp funktionerna. Kan se att de blir lättare för felsökande och lättare om man ska bygga vidare på funktionerna.
