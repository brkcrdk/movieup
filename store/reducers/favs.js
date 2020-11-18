const favs = (state = [], { type, payload }) => {
  switch (type) {
    case 'favourites/add':
      if (payload) {
        const isFav = state.some((item) => {
          return item.imdbID === payload.imdbID;
        });
        if (!isFav) {
          return (state = state.concat(payload));
        }
        return state;
      }
      return state;
    case 'favourites/remove':
      return (state = state.filter((item) => {
        return item.imdbID !== payload;
      }));
    default:
      return state;
  }
};

export default favs;
