import styled from 'styled-components'

export const VideoCardBg = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 320px;
  font-family: 'Roboto';
  margin-bottom: 40px;

  @media screen and (min-width: 576px) {
    flex-direction: row;
    margin-bottom: 100px;
  }
`

export const VideoThumbNail = styled.img`
  width: 100%;
  height: 280px;

  @media screen and (min-width: 576px) {
    width: 55%;
    margin-right: 50px;
  }
`

export const Title = styled.p`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 0px;
  color: ${props => (props.lightMode === 'light' ? '#212121' : '#ffffff')};
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

export const VideoDataBg = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    width: 38%;
    margin-right: 50px;
  }
`

export const VideoHrContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const ChannelName = styled.p`
  color: #0f0f0f;
  font-size: 16px;
  font-weight: 400;
  margin-top: 10px;
  margin-right: 26px;
  margin-bottom: 0px;
  color: #64748b;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`

export const VideoStatsUl = styled.ul`
  padding-left: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
`

export const ViewCount = styled.li`
  list-style-type: none;

  @media screen and (max-width: 576px) {
    list-style-type: disc;
  }
`
export const CountPara = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-right: 26px;
  color: #64748b;
`

export const PublishTime = styled(ViewCount)`
  list-style-type: disc;
`
