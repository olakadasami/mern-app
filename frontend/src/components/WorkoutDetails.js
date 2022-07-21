import { useWorkoutContext } from "../hooks/useWorkoutsContext"

const WorkoutDetails = ({workout}) => {

  const {dispatch} = useWorkoutContext();

  const deleteHandler = async () => {
    const response = await fetch(`http://localhost:5000/api/workouts/${workout._id}`, {
      method: "DELETE"
    })

    const json = await response.json()

    if(response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }


  return (

    <div className="details">
        <h3>{workout.title}</h3>
        <p><strong>Load(kg):</strong> {workout.load}</p>
        <p><strong>Reps:</strong> {workout.reps}</p>
        <p>{workout.createdAt}</p>

        <span className="delete" onClick={deleteHandler}>delete</span>
    </div>
  )
}

export default WorkoutDetails