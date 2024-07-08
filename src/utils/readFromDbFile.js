import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export async function readFromDbFile() {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(data, null, 2);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('Error reading existing contacts:', error.message);
      return;
    }
  }
}
