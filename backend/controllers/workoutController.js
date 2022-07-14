const Workout = require('../models/workoutModel')


// @desc get all workouts
// @method GET
// @route '/', Private
const AllWorkouts = (req, res) => {

    res.json({message: "All workouts"})
    
}


// @desc create a workout
// @method POST
// @route '/', Private
const CreateWorkout = (req, res) => {

    res.json({message: "new workout created"})

}


// @desc get single workout detail
// @method GET
// @route '/:id', Private
const workoutDetail = (req, res) => {

    res.json({message: "single workout"})

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