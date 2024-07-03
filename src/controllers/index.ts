import express from 'express';
import welcomeController from './welcome/welcome';
import apiBaseController from './api';

const router = express.Router();
router.use('/api', apiBaseController);
router.use('/', welcomeController);

export default router;