const express = require('express');
const router = express.Router()
const { AllWorkouts, CreateWorkout, workoutDetail, updateWorkout, deleteWorkout} = require('../controllers/workoutController')

router.get('/', AllWorkouts);

router.post('/', CreateWorkout);

router.get('/:id', workoutDetail);

router.patch('/:id', updateWorkout);

router.delete('/:id', deleteWorkout);

module.exports = router;