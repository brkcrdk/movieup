const sidebar = (state = false, { type, payload }) => {
  switch (type) {
    case 'sidebar/toggle':
      if (payload) {
        return (state = payload);
      } else {
        return (state = !state);
      }
    default:
      return state;
  }
};

export default sidebar;
