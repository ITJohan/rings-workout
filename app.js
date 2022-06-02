const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const workout = Object.fromEntries(formData);

  workout.date = new Date();

  const workouts = JSON.parse(localStorage.getItem('workouts') ?? '[]');

  workouts.push(workout);

  localStorage.setItem('workouts', JSON.stringify(workouts));

  generateWorkout();
});

const generateWorkout = () => {
  const workouts = JSON.parse(localStorage.getItem('workouts') ?? '[]');

  if (workouts.length > 1) {
    console.log('a');
    const previousWorkout = workouts[workouts.length - 2];

    for (const [attribute, value] of Object.entries(previousWorkout)) {
      if (attribute === 'date') continue;
      document.getElementById(attribute).value = value;
    }
  } else if (workouts.length > 0) {
    console.log('b');
    form.setAttribute('value', 'B');
  }
};

generateWorkout();
