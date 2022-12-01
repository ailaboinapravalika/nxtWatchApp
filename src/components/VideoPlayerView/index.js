import {Component} from 'react'

import ReactPlayer from 'react-player'

import {BiLike, BiDislike} from 'react-icons/bi'

import {CgPlayListAdd} from 'react-icons/cg'

import {formatDistanceToNow} from 'date-fns'

import {
  VideoPlayerBg,
  VideoTitle,
  VideoRatingsDiv,
  StaticsDiv,
  Views,
  LikeBtn,
  Xline,
  ChannelInfoDiv,
  ChannelLogo,
  ChannelStatsDiv,
  ChannelName,
  UserResponseDivLg,
  DisLikeBtn,
  SaveBtn,
} from './StyledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

class VideoPlayerView extends Component {
  state = {
    likeStatus: 'inActive',
    disLikeStatus: 'inActive',
  }

  onClickLikeBtn = () => {
    const {likeStatus, disLikeStatus} = this.state
    if (likeStatus === 'inActive' && disLikeStatus === 'active') {
      this.setState({likeStatus: 'active', disLikeStatus: 'inActive'})
    } else {
      this.setState(prevState => ({
        likeStatus: prevState.likeStatus === 'active' ? 'inActive' : 'active',
      }))
    }
  }

  onClickDisLikeBtn = () => {
    const {likeStatus, disLikeStatus} = this.state
    if (disLikeStatus === 'inActive' && likeStatus === 'active') {
      this.setState({disLikeStatus: 'active', likeStatus: 'inActive'})
    } else {
      this.setState(prevState => ({
        disLikeStatus:
          prevState.disLikeStatus === 'active' ? 'inActive' : 'active',
      }))
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {
            lightMode,
            onAddVideo,
            onRemoveSavedVideo,
            savedVideosList,
          } = value

          const {videoData} = this.props

          const {
            id,
            title,
            videoUrl,
            thumbnailUrl,
            channel,
            viewCount,
            publishedAt,
            description,
          } = videoData

          const {name, profileImageUrl, subscriberCount} = channel

          const publishTime = formatDistanceToNow(new Date(publishedAt))
          const {likeStatus, disLikeStatus} = this.state
          let saveBtnText
          const isAlreadySaved = savedVideosList.some(item => item.id === id)
          saveBtnText = isAlreadySaved ? 'Saved' : 'Save'

          const onClickSaveBtn = () => {
            if (isAlreadySaved) {
              saveBtnText = 'Save'
              onRemoveSavedVideo(id)
            } else {
              const addVideoData = {
                id,
                thumbnailUrl,
                title,
                channel: {name},
                viewCount,
                publishedAt,
              }
              saveBtnText = 'Saved'
              onAddVideo(addVideoData)
            }
          }

          return (
            <VideoPlayerBg>
              <ReactPlayer url={videoUrl} width="100%" height="66%" controls />
              <VideoTitle lightMode={lightMode}>{title}</VideoTitle>

              <VideoRatingsDiv>
                <StaticsDiv>
                  <Views>{viewCount} views</Views>
                  <Views>•</Views>
                  <Views>{publishTime}</Views>
                </StaticsDiv>

                <UserResponseDivLg>
                  <LikeBtn
                    likeStatus={likeStatus}
                    type="button"
                    onClick={this.onClickLikeBtn}
                  >
                    <BiLike />
                    Like
                  </LikeBtn>
                  <DisLikeBtn
                    disLikeStatus={disLikeStatus}
                    type="button"
                    onClick={this.onClickDisLikeBtn}
                  >
                    <BiDislike /> Dislike
                  </DisLikeBtn>
                  <SaveBtn
                    saveBtnText={saveBtnText}
                    type="button"
                    onClick={onClickSaveBtn}
                  >
                    <CgPlayListAdd />
                    {`${saveBtnText}`}
                  </SaveBtn>
                </UserResponseDivLg>
              </VideoRatingsDiv>

              <Xline />
              <ChannelInfoDiv>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <ChannelStatsDiv>
                  <ChannelName lightMode={lightMode}>{name}</ChannelName>
                  <Views>{subscriberCount} subscribers</Views>
                </ChannelStatsDiv>
              </ChannelInfoDiv>
              <Views>{description}</Views>
            </VideoPlayerBg>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoPlayerView
