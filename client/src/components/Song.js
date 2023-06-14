import styled from 'styled-components';

export const Container = styled.div`
  @font-face {
    font-family: 'GangwonEdu_OTFBoldA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFBoldA.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'GangwonEdu_OTFBoldA';
  font-size: 20px;
  font-weight: 500;
`;
export const Box = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 7%;
`;
export const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  padding-top: 10px;
  width: 500px;
  height: 550px;
`;
export const SongContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2vh;
`;
export const SongBox = styled.div`
  background-color: #d9d9d9;
  border-radius: 10px 0px 0px 10px;
  border: none;

  height: 5vh;
  width: 25vw;
  text-align: center;
  line-height: 2;
`;
export const Bar = styled.div`
  border: none;
  background-color: #ff6060;
  border-radius: 0px 10px 10px 0px;
  width: 5vw;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  // gap: 2px;
`;

export const BarBtn = styled.button`
  border: none;
  background-color: #ff6060;
  width: 50%;
  cursor: pointer;
`;

export const SongDetail = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

export const Title = styled.h3`
  text-align: center;
`;

export const Singer = styled.span``;

export const Lyrics = styled.p`
  margin-top: 10%;
  text-align: center;
`;

export const PlayBox = styled.div`
  background-color: gray;
`;
