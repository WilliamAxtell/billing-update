import express from 'express';
import {router} from './routes/billings.js';
import schedule from 'node-schedule';
import { insertRows } from './functions/insert-rows.js';
const app = express();

// middleware
app.use(express.json());
//app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/api/v1/new-billing', router);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        app.listen(port, () => {
          console.log(`Server is running on port ${port}`);
        });
        schedule.scheduleJob('*/5 * * * *'/*'0 3 * * *'*/, function(){
          insertRows();
        });
        console.log('Job scheduled');
      } catch (err) {
        console.error(err);
      }
    }

start();