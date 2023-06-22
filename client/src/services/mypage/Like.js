import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_API_KEY },
});
export const like = async () => {
  try {
    const response = await axios.get('/data/like.json');
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const videoList = async () => {
  try {
    const response = await axios.get('/data/like.json');
    console.log(response.data[0].videoId);
    const videoIds = response.data.map((item) => item.videoId);
    // const youtubeVideo = await apiClient.get('videos', {
    //   params: {
    //     part: 'snippet',
    //     id: videoIds,
    //   },
    // });
    // return youtubeVideo.data.items;
  } catch (error) {
    throw error;
  }
};
