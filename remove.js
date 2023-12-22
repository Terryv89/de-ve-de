import {
  remove,
  ref,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { db } from "./index.js";

export function RemoveData(enterTitle) {
  remove(ref(db, "Movies/" + enterTitle))
    .then(() => {
      alert("Data successfully deleted");
    })
    .catch((error) => {
      alert(error);
    });
}

// delade upp funktionerna. Kan se att de blir lättare för felsökande och lättare om man ska bygga vidare på funktionerna.
