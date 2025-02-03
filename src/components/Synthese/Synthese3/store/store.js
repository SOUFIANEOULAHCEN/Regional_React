import { createStore } from "redux";
import PlaylistReducer from '../reducers/PlaylistReducer' ;
const store = createStore(PlaylistReducer);
export default store;
