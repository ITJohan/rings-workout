export const addWorkoutDate = (workout) => ({ ...workout, date: Date.now() });

export const addWorkoutType = (workout) => ({
  ...workout,
  type: getCurrentWorkoutType(getWorkouts()),
});

export const addPushLevel = (workout) => ({
  ...workout,
  pushLevel: calculateCurrentPushLevel(getPreviousWorkout(getWorkouts())),
});

export const addPullLevel = (workout) => ({
  ...workout,
  pullLevel: calculateCurrentPullLevel(getPreviousWorkout(getWorkouts())),
});

export const postWorkout = (workout) =>
  localStorage.setItem('workouts', JSON.stringify([...getWorkouts(), workout]));

export const getPreviousWorkout = (workouts) =>
  workouts.length ? workouts[workouts.length - 1] : undefined;

export const getPreviousWorkoutType = (workouts) =>
  workouts.length % 2 === 1 ? 'A' : 'B';

export const getCurrentWorkoutType = (workouts) =>
  getPreviousWorkoutType(workouts) === 'A' ? 'B' : 'A';

export const calculateCurrentPushLevel = (previousWorkout) => {
  if (!previousWorkout) {
    return 1;
  }

  if (
    previousWorkout.pushLevel < 10 &&
    previousWorkout.push1 === 10 &&
    previousWorkout.push2 === 10 &&
    previousWorkout.push3 === 10
  ) {
    return previousWorkout.pushLevel + 1;
  }

  return previousWorkout.pushLevel;
};

export const calculateCurrentPullLevel = (previousWorkout) => {
  if (!previousWorkout) {
    return 1;
  }

  if (
    previousWorkout.pullLevel < 10 &&
    previousWorkout.pull1 === 10 &&
    previousWorkout.pull2 === 10 &&
    previousWorkout.pull3 === 10
  ) {
    return previousWorkout.pullLevel + 1;
  }

  return previousWorkout.pullLevel;
};

export const getWorkouts = (form) =>
  JSON.parse(localStorage.getItem('workouts')) ?? [];
