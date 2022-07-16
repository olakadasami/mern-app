import { useEffect, useState } from 'react';
import WorkoutDetails from './WorkoutDetails';
import WorkoutForm from './WorkoutForm';


const Home = () => {

    const [workouts, setWorkouts] = useState(null)

    useEffect(()=> {
 
        fetch('http://localhost:5000/api/workouts', {
            headers: {
                "accepts":"application/json"
            }
        })
            .then(res => {
                res.json()
                    .then(json => {
                        setWorkouts(json)
                    }).catch(err => console.log("hello", err))
            }).catch(err => {
                console.log(err)
            })

    }, [])

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