const removeFav = (fav) => {
  return {
    type: 'favourites/remove',
    payload: fav,
  };
};

export default removeFav;
