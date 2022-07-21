import { useEffect} from 'react';

import WorkoutDetails from './WorkoutDetails';
import WorkoutForm from './WorkoutForm';
import { useWorkoutContext } from '../hooks/useWorkoutsContext';


const Home = () => {

    const { workouts, dispatch } = useWorkoutContext();


    useEffect(()=> {

        const fetchWorkouts = async () => {
            const response =  await fetch('http://localhost:5000/api/workouts')

            const json = await response.json()

            if(response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json}) 
            }

        }

        fetchWorkouts();

    }, [dispatch])

  return (
    <div className="container">

       <div className="workouts">
        {workouts && workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout}/>
        ))}
       </div>
       <WorkoutForm />
    </div>
  )
}

export default Home;