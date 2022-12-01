import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardBg = styled.li`
  display: flex;
  flex-direction: column;

  font-family: 'Roboto';
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 50px;
  width: 100%;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 46%;
    height: 320px;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
    height: 320px;
  }
`

export const VideoThumbNail = styled.img`
  width: 100%;
`

export const ChannelImgBg = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
`

export const ChannelImg = styled.img`
  width: 60px;
  height: 70px;
  padding-top: 20px;
  margin-right: 20px;
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 0px;
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
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`
export const CountPara = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-right: 10px;
  margin-top: 0px
  color: #64748b;
`

export const VideoStatsUl = styled.ul`
  padding-left: 0px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: space-around;
`

export const ViewCount = styled.li`
  font-size: 16px;
  font-weight: 400;
  margin-right: 26px;
  list-style-type: none;
  color: #64748b;
  margin-top: 0px;
  @media screen and (max-width: 576px) {
    list-style-type: disc;
    font-size: 10px;
  }
`
export const PublishTime = styled(ViewCount)`
  list-style-type: disc;
`
