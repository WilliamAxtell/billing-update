import dotenv from 'dotenv';
import { google } from 'googleapis';
import { authGoogle } from './google-auth.js';

const sheets = google.sheets('v4');
dotenv.config();

const getRow = async (media) => {    
  await authGoogle();

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: "1s5GoTFkHuf541onfD8Xc7lHLkliCNOXsx9Oi8XT-aCk",
    range: "'Paste'!A1:A",
    valueRenderOption: 'FORMATTED_VALUE'
  })

  //console.log(res.data.values.length);
  return res.data.values.length + 1;
}

//getRow();

export { getRow };