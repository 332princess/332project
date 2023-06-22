import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_API_KEY },
});

export const videoList = async () => {
  try {
    const response = await apiClient.get('playlistItems', {
      params: {
        part: 'snippet',
        playlistId: 'PLc_2DBEEb9ofX7p4Mq7_z-p5Pta1gBiSH',
        maxResults: 10,
      },
    });
    return response.data.items;
  } catch (error) {
    throw error;
  }
};

export const addToPlayList = async (video) => {
  try {
    await axios.post('/api/playlists', video);
    console.log('비디오가 성공적으로 추가되었습니다.');
  } catch (error) {
    console.log('비디오 추가 중 오류가 발생했습니다.', error);
    throw error;
  }
};

export const updatePlayList = async (playList) => {
  try {
    await axios.post('/api/playlists', playList);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const addToLiked = async (video) => {
  try {
    await axios.post('/api/likes', video);
    console.log('비디오가 성공적으로 추가되었습니다.');
  } catch (error) {
    console.log('비디오 추가 중 오류가 발생했습니다.', error);
    throw error;
  }
};

export const updateLiked = async (liked) => {
  try {
    await axios.post('/api/likes', liked);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
