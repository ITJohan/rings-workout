const COOLDOWN = 90;

const form = document.querySelector('form');
const numberInputs = document.querySelectorAll('input[type="number"');

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

let intervalRef;
const timer = document.querySelector('time');

const startCooldown = () => {
  clearInterval(intervalRef);
  timer.innerHTML = COOLDOWN;
  intervalRef = setInterval(() => {
    const currentTime = Number(timer.innerHTML);
    if (currentTime === 0) return;
    timer.innerHTML = currentTime - 1;
  }, 1000);
};

for (const input of numberInputs) {
  input.addEventListener('focusout', (e) => {
    if (e.target.value !== '') {
      startCooldown();
    }
  });
}

const generateWorkout = () => {
  const workouts = JSON.parse(localStorage.getItem('workouts') ?? '[]');

  if (workouts.length > 1) {
    const previousWorkout = workouts[workouts.length - 2];

    for (const [attribute, value] of Object.entries(previousWorkout)) {
      if (attribute === 'date') {
        continue;
      }

      if (attribute.includes('Name')) {
        document.getElementById(attribute).value = value;
      } else {
        document.getElementById(attribute).placeholder = value;
      }
    }
  } else if (workouts.length > 0) {
    form.reset();
  }

  generateLog();
};

const generateLog = () => {
  document.getElementById('log').innerHTML = '';
  const workouts = JSON.parse(localStorage.getItem('workouts') ?? '[]');

  for (const workout of workouts) {
    const date = new Date(workout.date).toDateString();
    const table = `
      <h4>Workout ${date}</h4>
      <table>
        <tbody>
          <tr>
            <th>${workout.legName}</th>
            <td>${workout.leg1}</td>
            <td>${workout.leg2}</td>
            <td>${workout.leg3}</td>
          </tr>
          <tr>
            <th>${workout.pushName}</th>
            <td>${workout.push1}</td>
            <td>${workout.push2}</td>
            <td>${workout.push3}</td>
          </tr>
          <tr>
            <th>${workout.pullName}</th>
            <td>${workout.pull1}</td>
            <td>${workout.pull2}</td>
            <td>${workout.pull3}</td>
          </tr>
        </tbody>
      </table>
    `;

    document.getElementById('log').innerHTML += table;
  }
};

generateWorkout();
