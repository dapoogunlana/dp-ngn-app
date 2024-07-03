import express from 'express';
import welcomeController from './welcome/welcome';
import apiBaseController from './api';
import apiController from './api-v1';

const router = express.Router();
router.use('/api', apiBaseController);
router.use('/api/v1', apiController);
router.use('/', welcomeController);

export default router;