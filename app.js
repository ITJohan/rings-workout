const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const workout = Object.fromEntries(formData);

  workout.date = Date.now();
  workout.type = 'A';

  saveWorkout(workout);
});

const saveWorkout = (workout) => {
  const workouts = getWorkouts();

  if (workouts) {
    const updatedWorkouts = [...JSON.parse(workouts), workout];
    localStorage.setItem('workouts', JSON.stringify(updatedWorkouts));
  } else {
    localStorage.setItem('workouts', JSON.stringify([workout]));
  }
};

const getWorkouts = () => localStorage.getItem('workouts');
