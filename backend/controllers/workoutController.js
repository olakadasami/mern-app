
const Workout = require('../models/workoutModel')
const mongoose = require('mongoose');


// @desc get all workouts
// @method GET
// @route '/', Private
const AllWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find().sort({createdAt: -1})
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

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({ error: "no such workout"})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({ error: "no such workout"}) 
    }

    res.status(200).json(workout)
    
    

}


// @desc update a workout
// @method PATCH
// @route '/:id', Private
const updateWorkout = async (req, res) => {

    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({ error: "no such workout"})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!workout){
        return res.status(404).json({ error: "no such workout"})
    }    

    res.status(200).json(workout)
}


// @desc delete workout 
// @method DELETE
// @route '/:id', Private
const deleteWorkout = async (req, res) => {

    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({ error: "no such workout"})
    }

    const workout = await Workout.findByIdAndDelete(id);

    if(!workout){
        return res.status(404).json({ error: "no such workout"})
    }

    res.status(200).json(workout)


}

module.exports = {
    AllWorkouts,
    CreateWorkout,
    workoutDetail,
    updateWorkout,
    deleteWorkout
};