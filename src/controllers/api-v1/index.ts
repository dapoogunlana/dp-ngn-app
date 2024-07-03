import express from 'express';
import traderController from './traders';
import racerController from './racers';
import visitorController from './racers';

const router = express.Router();

// router.use('/traders', traderController);
// router.use('/racers', racerController);
// router.use('/visitors', visitorController);

export default router;