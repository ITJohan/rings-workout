import { clearForm, renderPreviousWorkoutInForm } from './renderUtils.js';
import { pipe } from './utils.js';
import {
  addPullLevel,
  addPushLevel,
  addWorkoutDate,
  addWorkoutType,
  postWorkout,
} from './workoutUtils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const workout = Object.fromEntries(formData);

  pipe(
    addWorkoutDate,
    addWorkoutType,
    addPushLevel,
    addPullLevel,
    postWorkout
  )(workout);

  clearForm();
});

renderPreviousWorkoutInForm();
