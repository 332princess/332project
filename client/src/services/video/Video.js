import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_API_KEY },
});

export const videoList = async () => {
  try {
    // apiClient.interceptors.request.use(
    //   (config) => {
    //     config.headers[
    //       'Authorization'
    //     ] = `Bearer ${process.env.REACT_APP_API_KEY}`;
    //     return config;
    //   },
    //   (error) => {
    //     return Promise.reject(error);
    //   }
    // );

    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await axios.get('http://localhost:8081/songs');
    const videoIds = String(response.data.rows.map((item) => item.videoId));
    console.log(videoIds);
    const apiURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=dwfjiwdk&key=${apiKey}`;
    console.log('22');
    axios
      .get(apiURL)
      .then((res) => {
        console.log(res);
        return res.data.items[0];
      })
      .catch((err) => {
        console.err(err);
      });
    // const youtube = await apiClient.get('videos', {
    //   params: {
    //     part: 'snippet',
    //     videoId: 'dwfjiwdk',
    //   },
    // });
    // console.log(youtube);
    console.log('22');
    // return youtube;
  } catch (error) {
    console.log(error);
  }
};

export const addToPlayList = async (video) => {
  try {
    await axios.post('http://localhost:8081/playlists', video);
    console.log('비디오가 성공적으로 추가되었습니다.');
  } catch (error) {
    console.log('비디오 추가 중 오류가 발생했습니다.', error);
    throw error;
  }
};

export const updatePlayList = async (playList) => {
  try {
    await axios.post('http://localhost:8081/playlists', playList);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const addToLiked = async (video) => {
  try {
    await axios.post('http://localhost:8081/likes', video);
    console.log('비디오가 성공적으로 추가되었습니다.');
  } catch (error) {
    console.log('비디오 추가 중 오류가 발생했습니다.', error);
    throw error;
  }
};

export const updateLiked = async (liked) => {
  try {
    await axios.post('http://localhost:8081/likes', liked);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
