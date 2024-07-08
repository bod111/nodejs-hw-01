// import { PATH_DB } from '../constants/contacts.js';

import { createFakeContact } from '../utils/createFakeContact.js';
import { readFromDbFile } from '../utils/readFromDbFile.js';
import { updateContacts } from '../utils/updateContacts.js';

export const addOneContact = async () => {
  let existingContacts = await readFromDbFile();
  const newContact = createFakeContact();
  const updatedContacts = [...existingContacts, newContact];

  await updateContacts(updatedContacts);
};

await addOneContact();
