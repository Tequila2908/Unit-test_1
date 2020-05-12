import healthState from './state';

const healthBarState = (item) => {
  for (const key in healthState) {
    if (item.health >= healthState[key]) {
      return key;
    }
  }
  return null;
};

export default healthBarState;
