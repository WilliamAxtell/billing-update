import {asyncWrapper} from '../middleware/async.js';
import {CircularQueue} from '../functions/circular-queue.js';

const queue = new CircularQueue(50);

const createBilling = asyncWrapper(async (req, res) => {
    res.status(200).json(req.body);
    queue.insert(req.body);
    //queue.print();
});

export {queue, createBilling};