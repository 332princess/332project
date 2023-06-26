export const click = (currentVideo, video, clickedVideo, setCurrentVideo) => {
  if (currentVideo && currentVideo.id === clickedVideo.id) {
    setCurrentVideo({ ...currentVideo, playing: !currentVideo.playing });
  } else {
    setCurrentVideo(clickedVideo);
  }
};

export const remove = (
  clickedVideo,
  deleteList,
  setDeleteList,
  video,
  setVideo,
  currentVideo,
  setCurrentVideo
) => {
  const newList = deleteList.concat(clickedVideo.id);
  setDeleteList(newList);
  setVideo(video.filter((item) => item.id !== clickedVideo.id));

  if (currentVideo && currentVideo.id === clickedVideo.id) {
    setCurrentVideo(null);
  }
};
