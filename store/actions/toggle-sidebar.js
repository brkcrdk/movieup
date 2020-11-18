const toggleSidebar = (toggle) => {
  return {
    type: 'sidebar/toggle',
    payload: toggle,
  };
};

export default toggleSidebar;
