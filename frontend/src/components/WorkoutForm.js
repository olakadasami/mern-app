import { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
    const { dispatch } = useWorkoutContext();

    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const workout = { title, load, reps };
        
        const response = await fetch('http://localhost:5000/api/workouts', {
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                "Content-Type": "application/json"
            }
        });
        
        const json = await response.json();
        
        if(!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        };

        if(response.ok) {
            dispatch({ type: 'CREATE_WORKOUT', payload: json})
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            setEmptyFields([])
            console.log('new workout adddd', json)

        };

    };


    return (

        <form className="create" onSubmit={handleSubmit}>
            <h2>Add a New Workout</h2>

            <label>Exercise title :</label>
            <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)} 
            value={title} 
            className={emptyFields.includes('title') ? 'error' : ''}
            />

            <label>Load (in kg) :</label>
            <input 
            type="number" 
            onChange={(e) => setLoad(e.target.value)} 
            value={load} 
            className={emptyFields.includes('load') ? 'error' : ''}
            />

            <label>Reps :</label>
            <input type="number" 
            onChange={(e) => setReps(e.target.value)} 
            value={reps} 
            className={emptyFields.includes('reps') ? 'error' : ''}
            />

            <button>Add Workout</button>

            {error && <div className="error-div error">{error}</div>}

        </form>
    )
}

export default WorkoutForm;