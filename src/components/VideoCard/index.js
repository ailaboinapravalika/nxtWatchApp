import {formatDistanceToNow} from 'date-fns'
import {withRouter} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoCardBg,
  StyledLink,
  VideoThumbNail,
  VideoHrContainer,
  ChannelImgBg,
  ChannelImg,
  Title,
  VideoDataBg,
  ChannelName,
  ViewCount,
  VideoStatsUl,
  PublishTime,
  CountPara,
} from './StyledComponents'

const VideoCard = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {lightMode} = value

      const {videoDetails} = props
      const {
        id,
        channel,
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
      } = videoDetails
      const {name, profileImageUrl} = channel

      const publishTime = formatDistanceToNow(new Date(publishedAt), {
        addSuffix: true,
      })

      return (
        <StyledLink to={`/videos/${id}`}>
          <VideoCardBg key={id}>
            <VideoThumbNail src={thumbnailUrl} alt="video thumbnail" />

            <ChannelImgBg>
              <ChannelImg src={profileImageUrl} alt="channel logo" />
              <VideoDataBg>
                <Title lightMode={lightMode}>{title}</Title>
                <VideoHrContainer>
                  <ChannelName>{name}</ChannelName>
                  <VideoStatsUl>
                    <ViewCount>
                      <CountPara>{viewCount} views</CountPara>
                    </ViewCount>
                    <PublishTime>
                      <CountPara>{publishTime}</CountPara>
                    </PublishTime>
                  </VideoStatsUl>
                </VideoHrContainer>
              </VideoDataBg>
            </ChannelImgBg>
          </VideoCardBg>
        </StyledLink>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(VideoCard)
