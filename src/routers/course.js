const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.post('/handle-form', courseController.deleteMany);
router.get('/create-course', courseController.show);
router.get('/:id/edit', courseController.update);
router.get('/:id/restore', courseController.restore);
router.get('/:slug', courseController.showDetail);
router.get('/', courseController.index);

router.put('/:id', courseController.updatePut);
router.delete('/:id', courseController.delete);



module.exports = router;


