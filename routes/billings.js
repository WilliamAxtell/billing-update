import express from 'express';
import { createBilling } from '../controllers/billings.js';
const router = express.Router();

router.route('/').post(createBilling);

export {router};