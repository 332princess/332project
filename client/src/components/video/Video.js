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
  margin-top: 10%;
`;
export const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  padding: 10px;
  width: 700px;
  height: 60vh;
  .non_scroll {
    overflow: hidden;
  }
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
    display: none;
  }
`;
export const VideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2vh;
`;
export const VideoBox = styled.div`
  background-color: #d9d9d9;
  border-radius: 10px 0px 0px 10px;
  border: none;
  height: 5vh;
  width: 25vw;
  text-align: center;
  line-height: 2;

  overflow-x: auto;
  white-space: no-wrap;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
    display: none;
  }
`;
export const Bar = styled.div`
  background-color: #000;
  opacity: 90%;
  border-radius: 0px 10px 10px 0px;
  width: 20%;
  padding-right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;

export const BarBtn = styled.button`
  background-color: #000;
  width: 10%;
  color: #fff;
`;

export const VideoDetail = styled.div`
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
  word-break: keep-all;

  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

export const PlayBox = styled.div`
  background-color: gray;
`;
