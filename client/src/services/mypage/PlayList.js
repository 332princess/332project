import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_API_KEY },
});

export const playlist = async () => {
  try {
    const res = await axios.get('http://localhost:8081/playlists');
    const videoIds = res.data.map((v) => v.Song.videoId).toString();
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
