import { updateContacts } from '../utils/updateContacts.js';

export const removeAllContacts = async () => {
  await updateContacts([]);
  console.log(`Successful operation: Removed all contact.`);
};

await removeAllContacts();
