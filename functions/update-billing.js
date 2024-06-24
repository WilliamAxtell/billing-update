import dotenv from 'dotenv';
import { google } from 'googleapis';

const sheets = google.sheets('v4');
dotenv.config();

//Fetches all the paid media clients and their respective analysts
const authGoogle = async () => {
  const auth = new google.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/drive'],
    credentials: {
      client_email: process.env.CRED_CLIENT_EMAIL,
      private_key: JSON.parse(process.env.CRED_PRIVATE_KEY).value,
      client_id: process.env.CRED_CLIENT_ID,
      type: process.env.CRED_TYPE,
      project_id: process.env.CRED_PROJECT_ID,
      private_key_id: process.env.CRED_PRIVATE_KEY_ID,
      auth_uri: process.env.CRED_AUTH_URI,
      token_uri: process.env.CRED_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.CRED_AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url: process.env.CRED_CLIENT_X509_CERT_URL
    }
  })

  google.options({ auth })
}

const getRow = async (media) => {    
  await authGoogle();

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: "1IeVtTwyFNxn4L8yObrjDHIxNSxhEPH_dPzUblv1e_84",
    range: "'Master AOL v2'!A1:A",
    valueRenderOption: 'FORMATTED_VALUE'
  })

  console.log(res.data.values.length);
}

getRow();

export { getAnalysts };