import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_API_KEY },
});

// const oauth2Client = new google.auth.OAuth2(
//   '클라이언트 아이디',
//   '클라이언트 시크릿',
//   '리다이렉트 URI'
// );
// const scopes = [
//   'https://www.googleapis.com/auth/youtube',
//   'https://www.googleapis.com/auth/youtube.force-ssl',
//   'https://www.googleapis.com/auth/youtube.readonly',
//   'https://www.googleapis.com/auth/youtubepartner',
// ];
// async function authenticate() {
//   return new Promise((resolve, reject) => {
//     const url = oauth2Client.generateAuthUrl({
//       access_type: 'offline',
//       scope: scopes,
//     });
//     console.log(url);
//     // const server = http.createServer(async (req, res) => {});
//   });
// }

export const videoList = async () => {
  try {
    apiClient.interceptors.request.use(
      (config) => {
        config.headers[
          'Authorization'
        ] = `Bearer ${process.env.REACT_APP_API_KEY}`;
        // console.log(config);
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    // const apiKey = process.env.REACT_APP_API_KEY;
    // const videoId = await axios.get('http://localhost:8081/songs');
    // const videoIds = String(videoId.data.rows.map((item) => item.videoId));
    // console.log(videoIds);
    // const apiURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snnipet&playlistId=PLtDQ_i5oSY762K9EqTqLzhGrrLhp8&key=${apiKey}`;
    // console.log('22');
    // axios
    //   .get(apiURL)
    //   .then((res) => {
    //     console.log(res);
    //     console.log('33');
    //     return res.data.items[0];
    //   })
    //   .catch((err) => {
    //     console.log('@2');
    //     console.error(err);
    //   });

    const youtube = await apiClient.get('playlistItems', {
      params: {
        part: 'snippet',
        playlistId: 'PLc_2DBEEb9ofX7p4Mq7_z-p5Pta1gBiSH',
        maxResults: 10,
      },
    });
    console.log(youtube.data);

    // const youtube = await apiClient.get('videos', {
    //   params: {
    //     part: 'snippet',
    //     videoId: 'dwfjiwdk',
    //   },
    // });
    // console.log(youtube);

    // const response = await axios.get('videos', {
    //   baseURL: `https://www.googleapis.com/youtube/v3/${process.env.REACT_APP_API_KEY}`,
    //   params: {
    //     // key: process.env.REACT_APP_API_KEY,
    //     part: 'snippet',
    //     id: '4c0h399QOmM',
    //     maxResults: 10,
    //     // id: `${videoIds}`,
    //   },
    // });
    // console.log(`data: %o`, response.data);
    // return response.data;
    return youtube.data.items;
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
