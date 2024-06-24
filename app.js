import express from 'express';
import {router} from './routes/billings.js';
import {queue} from './controllers/billings.js';
import schedule from 'node-schedule';
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
        schedule.scheduleJob('0 3 * * *', function(){
          console.log('Queue:');
          queue.print();
        });
        console.log('Job scheduled');
      } catch (err) {
        console.error(err);
      }
    }

start();