import { openDB } from "idb";

const dbPromise = openDB("quiz-db", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("history")) {
      db.createObjectStore("history", { keyPath: "id", autoIncrement: true });
    }
  },
});

export const saveQuizHistory = async (attempt) => {
  const db = await dbPromise;
  return await db.add("history", attempt);
};

export const getQuizHistory = async () => {
  const db = await dbPromise;
  return await db.getAll("history");
};

export const getAttemptById = async (id) => {
  const db = await dbPromise;
  return await db.get("history", id);
};
