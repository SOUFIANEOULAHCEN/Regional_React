export const SELECTED_PLAYLIST = "SELECTED_PLAYLIST";
export const SELECTED_VIDEO = "SELECTED_VIDEO";

export const likes_VIDEO = "likes_VIDEO";
export const dislikes_VIDEO = "dislikes_VIDEO";
export const ADD_COMMENT = "ADD_COMMENT";

export const SelectVideo = (idVideo) => ({
  type: SELECTED_VIDEO,
  payload: idVideo,
});
export const SelectPlaylist = (idPlaylist) => ({
  type: SELECTED_PLAYLIST,
  payload: idPlaylist,
});

export const LikeVideo = (idVideo) => ({
  type: likes_VIDEO,
  payload: idVideo,
});
export const dislikesVideo = (idVideo) => ({
  type: dislikes_VIDEO,
  payload: idVideo,
});

export const AddComment = (idVideo, comment) => ({
  type: ADD_COMMENT,
  payload: { idVideo, comment },
});
