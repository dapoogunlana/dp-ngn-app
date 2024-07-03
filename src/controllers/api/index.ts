import express from 'express';
import helloController from './hello';

const router = express.Router();

router.use('/hello', helloController);

export default router;