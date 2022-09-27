const router = require('express').Router();
const { validateZookeeper } = require('../../lib/zookeepers');
const animalRoutes = require('../apiRoutes/animalRoutes');
const zookeepersRoutes = require('./zookeeperRoutes');

router.use(animalRoutes);
router.use(zookeepersRoutes);

module.exports = router;