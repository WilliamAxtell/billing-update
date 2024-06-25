import dotenv from 'dotenv';
import { google } from 'googleapis';
import { authGoogle } from './google-auth.js';
import { getRow } from './get-row.js';

const sheets = google.sheets('v4');
dotenv.config();

const insertRows = async (media) => {    
  await authGoogle();
  const startRow = await getRow();

  const res = await sheets.spreadsheets.values.update({
    spreadsheetId: "1s5GoTFkHuf541onfD8Xc7lHLkliCNOXsx9Oi8XT-aCk",
    range: `'Paste'!A${startRow}`,
    valueInputOption: "USER_ENTERED",
    resource: { range: `'Paste'!A${startRow}`, majorDimension: "ROWS", values: [["a","b","c"], ["d", "e", "f"]] },
  })

  console.log("Data inserted successfully");
}

insertRows();

export { insertRows };