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

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
  @media (min-width: 1400px) {
    margin-top: 7%;
  }
  @media (max-width: 880px) {
    background-color: #bbf;
    width: 100%;
  }
  @media (max-width: 740px) {
    background-color: #000;
  }
`;

export const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  margin: 10px;
  width: 700px;
  height: 60vh;
  &.non_scroll {
    overflow: hidden;
    position: sticky;
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
  @media (max-width: 1455px) {
    border-radius: 0px;
    margin: 0;
  }
  @media (max-width: 1024px) {
    margin: 10px;
    background-color: #bbf;
  }
  @media (max-width: 880px) {
    background-color: #bbf;
    width: 100%;
  }
  @media (max-width: 740px) {
    background-color: #000;
    &.scroll {
      height: 20vh;
      position: sticky;
    }
  }
`;
export const YoutubeWrapper = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
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

  color: #000;
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
  @media (max-width: 1455px) {
    width: 40vw;
  }
  @media (max-width: 1024px) {
    width: 40vw;
  }
  @media (max-width: 880px) {
    width: 50vw;
    color: #000;
  }
  @media (max-width: 740px) {
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
  @media (max-width: 1455px) {
  }
  @media (max-width: 1024px) {
    color: #000;
  }
  @media (max-width: 880px) {
    background-color: #000;
  }
  @media (max-width: 740px) {
    background-color: #000;
  }
`;

export const BarBtn = styled.button`
  background-color: #000;
  width: 10%;
  color: #fff;
`;

export const VideoDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;

export const Title = styled.h3`
  justify-content: center;
  @media (min-width: 880px) {
  }
  @media (max-width: 880px) {
    color: #fff;
  }
  @media (max-width: 740px) {
  }
`;
