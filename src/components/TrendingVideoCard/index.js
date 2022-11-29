import {Link, withRouter} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import {
  VideoCardBg,
  VideoThumbNail,
  VideoHrContainer,
  Title,
  VideoDataBg,
  ChannelName,
  ViewCount,
  VideoStatsUl,
  PublishTime,
  CountPara,
} from './StyledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const TrendingVideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    channel,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videoDetails
  const {name} = channel

  console.log('saved video channel name', name)

  const publishTime = formatDistanceToNow(new Date(publishedAt))

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {lightMode} = value

        return (
          <Link style={{textDecoration: 'none'}} to={`/videos/${id}`}>
            <VideoCardBg key={id}>
              <VideoThumbNail src={thumbnailUrl} alt="video thumbnail" />

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
            </VideoCardBg>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(TrendingVideoCard)
