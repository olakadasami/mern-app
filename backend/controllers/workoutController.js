const { response } = require('express')
const Workout = require('../models/workoutModel')


// @desc get all workouts
// @method GET
// @route '/', Private
const AllWorkouts = async (req, res) => {


    try {
        const workouts = await Workout.find()

        

        res.json(workouts);
    } catch (err) {   
        res.status(400).json({error: err.message})
    }
   
   
    
}


// @desc create a workout
// @method POST
// @route '/', Private
const CreateWorkout = async (req, res) => {

    const { title, load, reps } = req.body;

    try {

        const workout = await Workout.create({title, load, reps })
        res.status(200).json(workout)
        
    } catch (err) {
        res.status(400).json({error: err.message})
    }

}


// @desc get single workout detail
// @method GET
// @route '/:id', Private
const workoutDetail = async (req, res) => {

    const id = req.params.id;

    try {
        const workout = await Workout.findById(id)

        res.status(200).json(workout)
        
    } catch (err) {
        res.status(400).json({error: err.message})
    }

}


// @desc update a workout
// @method PATCH
// @route '/:id', Private
const updateWorkout = (req, res) => {
    res.json({message: "Update workout"})

}


// @desc delete workout 
// @method DELETE
// @route '/:id', Private
const deleteWorkout = (req, res) => {

    res.json({message: "Delete workout"})

}

module.exports = {
    AllWorkouts,
    CreateWorkout,
    workoutDetail,
    updateWorkout,
    deleteWorkout

}