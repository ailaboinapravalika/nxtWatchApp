import {Component} from 'react'

import Cookies from 'js-cookie'

import LoadingView from '../LoadingView'

import FailureView from '../FailureView'

import NavBar from '../NavBar'

import VideoPlayerView from '../VideoPlayerView'

import MenuCard from '../MenuCard'

import Footer from '../Footer'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HomeBg,
  HomeMainContainer,
  LeftContainer,
  RightContainer,
} from './StyledComponents'

const videoApiStatusOb = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {videoStatus: videoApiStatusOb.initial, videoDetails: {}}

  componentDidMount() {
    this.setState({videoStatus: videoApiStatusOb.loading})
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    console.log('vdoItem get requsst')
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(videoItemDetailsApiUrl, options)
    const responseData = await response.json()
    if (response.ok) {
      const videoDetails = responseData.video_details
      const formattedVideoDetails = {
        id: videoDetails.id,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        thumbnailUrl: videoDetails.thumbnail_url,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        viewCount: videoDetails.view_count,
        publishedAt: videoDetails.published_at,
        description: videoDetails.description,
      }
      this.setState({
        videoStatus: videoApiStatusOb.success,
        videoDetails: formattedVideoDetails,
      })
    } else {
      this.setState({videoStatus: videoApiStatusOb.failure})
    }
  }

  onClickRetryVideoDetails = () => {
    console.log('vdo item retry')
    this.getVideoDetails()
  }

  renderLoadingView = () => <LoadingView />

  renderVideoDetailsSuccessView = () => {
    const {videoDetails} = this.state

    return <VideoPlayerView videoData={videoDetails} />
  }

  renderVideoDetailsFailureView = () => (
    <FailureView
      failureType="urlFailure"
      onClickRetryVideoDetails={this.onClickRetryVideoDetails}
    />
  )

  renderVideoItemDetailsView = () => {
    const {videoStatus} = this.state

    switch (videoStatus) {
      case videoApiStatusOb.loading:
        return this.renderLoadingView()
      case videoApiStatusOb.success:
        return this.renderVideoDetailsSuccessView()
      case videoApiStatusOb.failure:
        return this.renderVideoDetailsFailureView()

      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {lightMode} = value

          return (
            <HomeBg lightMode={lightMode} data-testid="videoItemDetails">
              <NavBar />
              <HomeMainContainer>
                <LeftContainer lightMode={lightMode}>
                  <MenuCard />
                  <Footer />
                </LeftContainer>
                <RightContainer lightMode={lightMode}>
                  {this.renderVideoItemDetailsView()}
                </RightContainer>
              </HomeMainContainer>
            </HomeBg>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
