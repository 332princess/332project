import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_API_KEY },
});

export const videoList = async () => {
  try {
    const videoId = await axios.get('http://localhost:8081/songs');
    const videoIds = videoId.data.rows.map((item) => item.videoId).toString();
    const youtube = await apiClient.get('videos', {
      params: {
        part: 'snippet',
        id: videoIds,
      },
    });
    return youtube.data.items;
  } catch (error) {
    console.log(error);
  }
};

export const playlist = async () => {
  try {
    const res = await axios.get('http://localhost:8081/playlists');
    const response = res.data.map((v) => v.Song.videoId);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const likelist = async () => {
  try {
    const res = await axios.get('http://localhost:8081/likes');
    console.log(res);
    const response = res.data.map((v) => v.Song.videoId);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addToPlayList = async (video) => {
  try {
    await axios.post('http://localhost:8081/playlists', { videoId: video.id });
    console.log('비디오가 성공적으로 추가되었습니다.');
  } catch (error) {
    console.log(video);
    console.log('비디오 추가 중 오류가 발생했습니다.', error);
    throw error;
  }
};

export const removeFromPlayList = async (video) => {
  try {
    await axios.delete('http://localhost:8081/playlists', {
      videoId: video.id,
    });
    console.log('비디오가 성공적으로 삭제되었습니다.');
  } catch (error) {
    console.log('비디오 삭제 중 오류가 발생했습니다.', error);
    throw error;
  }
};

export const addToLiked = async (video) => {
  try {
    await axios.post('http://localhost:8081/likes', { videoId: video.id });
    console.log('비디오가 성공적으로 추가되었습니다.');
  } catch (error) {
    console.log('비디오 추가 중 오류가 발생했습니다.', error);
    throw error;
  }
};

export const removeFromLiked = async (video) => {
  try {
    await axios.delete('http://localhost:8081/likes', { videoId: video.id });
    console.log('비디오가 성공적으로 삭제되었습니다.');
  } catch (error) {
    console.log('비디오 삭제 중 오류가 발생했습니다.', error);
    throw error;
  }
};
