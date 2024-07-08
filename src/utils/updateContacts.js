import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export async function updateContacts(data) {
  try {
    const jsonContacts = JSON.stringify(data, null, 2);
    await fs.writeFile(PATH_DB, jsonContacts);
    console.log('Update Contacts is Done');
  } catch (error) {
    console.log('Error Update Contacts:', error.message);
  }
}
