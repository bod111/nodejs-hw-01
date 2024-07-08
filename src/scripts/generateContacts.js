import { readFromDbFile } from '../utils/readFromDbFile.js';
import { updateContacts } from '../utils/updateContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    let existingContacts = [];
    existingContacts = await readFromDbFile();

    let generatedContacts = [];
    for (let i = 0; i < number; i++) {
      const newContact = createFakeContact();
      generatedContacts.push(newContact);
    }

    const updatedContacts = [...existingContacts, ...generatedContacts];

    updateContacts(updatedContacts);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
