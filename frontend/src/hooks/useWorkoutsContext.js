import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutContext = () => {
    const context = useContext(WorkoutsContext);

    if(!context) {
        throw Error('UseWorkoutContext must be used inside a WorkoutContextProvider')
    }

    return context
}