const express =require('express');
const router = express.Router();
const taskCtrl =require('../controllers/taskCtr');

router.post('/',taskCtrl.createTask);
router.get('/',taskCtrl.getAllTask);
router.put('/:id', taskCtrl.updateTask);
router.delete('/:id',taskCtrl.deleteTask);

module.exports = router;
