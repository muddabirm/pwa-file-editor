
import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {

  const jateDb = await openDB("jate", 1) // makes connection to db

  const text = jateDb.transaction("jate","readwrite") // allows to write to db allows rollback

  const save = text.objectStore("jate") 

  const trySave = save.put({ jate: content }) //passes content to be changed

  const success = await trySave // gives confimration that data was saved
  console.log('SAVED SUCCESSFULLY')

}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const jateDb = await openDB("jate", 1) // makes connection to db

  const text = jateDb.transaction("jate","readonly") // allows to read data only

  const save = text.objectStore("jate") 

  const trySave = save.getAll() // gets all saved data

  const success = await trySave // gves confimration that data was saved
  
  console.log('RETRIEVED SUCCESSFULLY', success)
  
  return success.value // returns saved value form success obj

}


initdb();
