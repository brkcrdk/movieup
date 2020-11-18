import { useSelector, useDispatch } from 'react-redux';
import { addFav, removeFav, toggleSidebar } from '~/store/actions';

const useRedux = () => {
  const dispatch = useDispatch();
  const sidebar = useSelector((s) => s.sidebar);
  const favs = useSelector((s) => s.favs);
  const handleAddFav = (favItem) => {
    return dispatch(addFav(favItem));
  };

  const handleRemoveFav = (favId) => {
    return dispatch(removeFav(favId));
  };
  const handleSidebar = (option) => {
    return dispatch(toggleSidebar(option));
  };

  return { sidebar, favs, handleAddFav, handleRemoveFav, handleSidebar };
};

export default useRedux;
