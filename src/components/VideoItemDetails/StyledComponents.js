import styled from 'styled-components'

export const HomeBg = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.lightMode === 'light' ? '#f9f9f9' : '#0f0f0f'};
`
export const HomeMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  width: 100%;
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 990px;
  width: 18%;
  min-width: 180px;
  padding-top: 30px;
  background: ${props => (props.lightMode === 'light' ? '#f9f9f9' : '#212121')};
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  flex-grow: 1;
  width: 75%;
  background: ${props => (props.lightMode === 'light' ? '#f1f1f1' : '#0f0f0f')};
  padding: 40px;
`

export const VideoCardBg = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 320px;
  font-family: 'Roboto';

  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 48%;
    height: 180px;
    margin-bottom: 100px;
  }
  @media screen and (min-width: 768px) {
    width: 31%;
    height: 180px;
    margin-bottom: 100px;
  }
`

export const VideoThumbNail = styled.img`
  width: 100%;
  height: 280px;
`

export const ChannelImgBg = styled.div`
  display: flex;
  width: 100%;
`

export const ChannelImg = styled.img`
  width: 60px;
  height: 70px;
  padding-top: 20px;
  margin-right: 20px;
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${props => (props.lightMode === 'light' ? '#212121' : '#ffffff')};
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const VideoDataBg = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoHrContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const ChannelName = styled.p`
  color: #0f0f0f;
  font-size: 16px;
  font-weight: 400;
  margin-top: 0px;
  margin-right: 26px;

  color: #64748b;
`

export const VideoStatsUl = styled.ul`
  padding-left: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0px;
`

export const ViewCount = styled.li`
  font-size: 14px;
  font-weight: 400;
  margin-right: 26px;

  color: #64748b;
`
