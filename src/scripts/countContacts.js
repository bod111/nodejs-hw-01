import { readFromDbFile } from '../utils/readFromDbFile.js';

export const countContacts = async () => {
  const contacts = await readFromDbFile();
  return await contacts.length;
};

console.log('Contects:', await countContacts());
