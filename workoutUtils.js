export const addWorkoutDate = (workout) => ({ ...workout, date: Date.now() });

export const addWorkoutType = (workout) => ({
  ...workout,
  type: getCurrentWorkoutType(getWorkouts()),
});

export const postWorkout = (workout) => {
  const workouts = getWorkouts();
  const updatedWorkouts = [...workouts, workout];
  localStorage.setItem('workouts', JSON.stringify(updatedWorkouts));
};

export const getPreviousWorkoutType = (workouts) =>
  workouts.length % 2 === 0 ? 'A' : 'B';

export const getCurrentWorkoutType = (workouts) =>
  getPreviousWorkoutType(workouts) === 'A' ? 'B' : 'A';

export const getWorkouts = () =>
  JSON.parse(localStorage.getItem('workouts')) ?? [];
