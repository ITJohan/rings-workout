import { pipe } from './utils.js';
import { addWorkoutDate, addWorkoutType, postWorkout } from './workoutUtils.js';

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const workout = Object.fromEntries(formData);

  pipe(addWorkoutDate, addWorkoutType, postWorkout)(workout);
});
