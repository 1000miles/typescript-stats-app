const rectangular = (state: any) => {
  return {
    area: () => {
      return state.height * state.width;
    }
  }
}

const openable = (state: any) => {
  return {
    toggleOpen: () => {
      state.open = !state.open;
    },
    area: () => {}
  }
}

const buildRectangleWindow = (state: any) => {
  // Take the state object of rectangle and assign to state
  // and take state object of openable and assign to state
  return Object.assign(state, rectangular(state), openable(state))
}

const rectangleWindow = buildRectangleWindow({
  height: 20,
  width: 20,
  open: false
});

rectangleWindow.open;
rectangleWindow.toggleOpen();
rectangleWindow.open;
