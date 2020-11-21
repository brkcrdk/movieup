import { useSelector, useDispatch } from 'react-redux';
import { addFav, removeFav, toggleSidebar } from '~/store/actions';

const useRedux = () => {
  const dispatch = useDispatch();
  const sidebar = useSelector((s) => s.sidebar);
  const favs = useSelector((s) => s.favs);

  const isFav = (id) => {
    return favs.some((item) => {
      return item.imdbID === id;
    });
  };

  const handleFav = (favItem) => {
    if (isFav(favItem.imdbID)) {
      return dispatch(removeFav(favItem.imdbID));
    } else {
      return dispatch(addFav(favItem));
    }
  };

  const handleSidebar = (option) => {
    return dispatch(toggleSidebar(option));
  };

  return { sidebar, favs, isFav, handleFav, handleSidebar };
};

export default useRedux;
