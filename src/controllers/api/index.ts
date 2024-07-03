import express from 'express';
import exampleController from './example';

const router = express.Router();

router.use('/hello', exampleController);

export default router;