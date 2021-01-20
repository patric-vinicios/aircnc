const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const routes = Router();
const upload = multer(uploadConfig);

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

routes.post('/session', SessionController.store);
routes.post('/spot', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', upload.single('thumbnail'), SpotController.index);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/booking', BookingController.store);

module.exports = routes;
