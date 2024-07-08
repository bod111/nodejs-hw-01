import { readFromDbFile } from '../utils/readFromDbFile.js';

export const getAllContacts = async () => {
  return await readFromDbFile();
};

console.log(await getAllContacts());
