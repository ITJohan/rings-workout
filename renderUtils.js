import {
  getPreviousWorkout,
  getWorkouts,
  calculateCurrentPushLevel,
  calculateCurrentPullLevel,
} from './workoutUtils.js';

export const renderPreviousWorkoutInForm = () => {
  const previousWorkout = getPreviousWorkout(getWorkouts());

  if (!previousWorkout) {
    renderPushLevel(1, previousWorkout.type);
    renderPullLevel(1, previousWorkout.type);
    renderPlaceholder('push1', 0);
    renderPlaceholder('push2', 0);
    renderPlaceholder('push3', 0);
    renderPlaceholder('pull1', 0);
    renderPlaceholder('pull2', 0);
    renderPlaceholder('pull3', 0);
  } else {
    renderPushLevel(
      calculateCurrentPushLevel(previousWorkout),
      previousWorkout.type
    );
    renderPullLevel(
      calculateCurrentPullLevel(previousWorkout),
      previousWorkout.type
    );
    renderPlaceholder('push1', previousWorkout.push1);
    renderPlaceholder('push2', previousWorkout.push2);
    renderPlaceholder('push3', previousWorkout.push3);
    renderPlaceholder('pull1', previousWorkout.pull1);
    renderPlaceholder('pull2', previousWorkout.pull2);
    renderPlaceholder('pull3', previousWorkout.pull3);
  }
};

const renderPlaceholder = (id, reps) => {
  document.getElementById(id).placeholder = reps;
};

const renderPushLevel = (level, type) => {
  switch (level) {
    case 1:
      document.getElementById('pushLabel').textContent =
        type === 'A' ? 'Dips' : 'Negative handstand push up';
      break;
    case 2:
      document.getElementById('pushLabel').textContent = 'Tucked planche';
      break;
    case 3:
      document.getElementById('pushLabel').textContent =
        'One legged tucked planche';
      break;
    case 4:
      document.getElementById('pushLabel').textContent =
        'Half legged tucked planche';
      break;
    case 5:
      document.getElementById('pushLabel').textContent =
        'One half legged tucked planche';
      break;
    case 6:
      document.getElementById('pushLabel').textContent = 'Saddle planche';
      break;
    case 7:
      document.getElementById('pushLabel').textContent = 'Planche';
      break;
    case 8:
      document.getElementById('pushLabel').textContent = 'Planche';
      break;
    case 9:
      document.getElementById('pushLabel').textContent = 'Planche';
      break;
    case 10:
      document.getElementById('pushLabel').textContent = 'Planche';
      break;
    default:
      document.getElementById('pushLabel').textContent = 'Dips';
      break;
  }
};

const renderPullLevel = (level, type) => {
  switch (level) {
    case 1:
      document.getElementById('pullLabel').textContent =
        type === 'A' ? 'Tucked front lever' : 'Pull up';
      break;
    case 2:
      document.getElementById('pullLabel').textContent = 'Tucked planche';
      break;
    case 3:
      document.getElementById('pullLabel').textContent =
        'One legged tucked planche';
      break;
    case 4:
      document.getElementById('pullLabel').textContent =
        'Half legged tucked planche';
      break;
    case 5:
      document.getElementById('pullLabel').textContent =
        'One half legged tucked planche';
      break;
    case 6:
      document.getElementById('pullLabel').textContent = 'Saddle planche';
      break;
    case 7:
      document.getElementById('pullLabel').textContent = 'Planche';
      break;
    case 8:
      document.getElementById('pullLabel').textContent = 'Planche';
      break;
    case 9:
      document.getElementById('pullLabel').textContent = 'Planche';
      break;
    case 10:
      document.getElementById('pullLabel').textContent = 'Planche';
      break;
    default:
      document.getElementById('pullLabel').textContent = 'Tucked front lever';
      break;
  }
};

export const clearForm = () => {
  document.querySelector('form').reset();
  renderPreviousWorkoutInForm();
};
