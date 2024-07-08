import { readFromDbFile } from '../utils/readFromDbFile.js';
import { updateContacts } from '../utils/updateContacts.js';

export const removeLastContact = async () => {
  const contacts = await readFromDbFile();
  contacts.pop();
  await updateContacts(contacts);
  console.log(`Successful operation: Removed last contact.`);
};

await removeLastContact();
