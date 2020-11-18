const addFav = (fav) => {
  return {
    type: 'favourites/add',
    payload: fav,
  };
};

export default addFav;
