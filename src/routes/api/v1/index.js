const { Router } = require('express');

const { BusinessesController } = require('~src/controllers/v1');

const router = Router();

const controller = new BusinessesController();

router.get('/businesses/search/:location', controller.search);

router.get('/businesses/:id', controller.details);

module.exports = router;
