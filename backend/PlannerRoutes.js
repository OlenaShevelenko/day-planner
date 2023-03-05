const { Router } = require ('express');
const {getPlanner,savePlanner, deletePlanner, editPlanner} = require ('./PlannerController');
const router = Router ();

router.get('/', getPlanner);
router.post('/savePlanner', savePlanner);
router.post('/deletePlanner', deletePlanner);
router.put('/editPlanner', editPlanner);


module.exports = router;