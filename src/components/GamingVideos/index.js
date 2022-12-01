import {Component} from 'react'

import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import LoadingView from '../LoadingView'

import FailureView from '../FailureView'

import NavBar from '../NavBar'

import GamingCard from '../GamingCard'

import MenuCard from '../MenuCard'

import Footer from '../Footer'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HomeBg,
  HomeMainContainer,
  LeftContainer,
  RightContainer,
  TrendingBg,
  VideosMainHeadingDiv,
  TrendingLogo,
  TrendingText,
  TrendingVideosList,
} from './StyledComponents'

const videoApiStatusOb = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GamingVideos extends Component {
  state = {videoApiStatus: videoApiStatusOb.initial, GamingVideosList: []}

  componentDidMount() {
    this.setState({videoApiStatus: videoApiStatusOb.loading})
    this.getVideoDetails()
  }

  getFormattedVideoObject = videoDetails => ({
    id: videoDetails.id,
    title: videoDetails.title,
    thumbnailUrl: videoDetails.thumbnail_url,
    viewCount: videoDetails.view_count,
  })

  getVideoDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const gamingVideosApiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(gamingVideosApiUrl, options)
    const responseData = await response.json()
    if (response.ok) {
      const videosList = responseData.videos
      const formattedVideosList = videosList.map(video =>
        this.getFormattedVideoObject(video),
      )

      this.setState({
        videoApiStatus: videoApiStatusOb.success,
        GamingVideosList: formattedVideosList,
      })
    } else {
      this.setState({videoApiStatus: videoApiStatusOb.failure})
    }
  }

  onClickRetryVideoDetails = () => {
    this.getVideoDetails()
  }

  renderVideoDetailsSuccessView = () => {
    const {GamingVideosList} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {lightMode} = value

          return (
            <TrendingBg>
              <VideosMainHeadingDiv lightMode={lightMode} data-testid="banner">
                <TrendingLogo lightMode={lightMode}>
                  <SiYoutubegaming />
                </TrendingLogo>

                <TrendingText lightMode={lightMode}>Gaming</TrendingText>
              </VideosMainHeadingDiv>
              <TrendingVideosList lightMode={lightMode}>
                {GamingVideosList.map(video => (
                  <GamingCard gameData={video} key={video.id} />
                ))}
              </TrendingVideosList>
            </TrendingBg>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderTrendingVideosView = () => {
    const {videoApiStatus} = this.state

    switch (videoApiStatus) {
      case videoApiStatusOb.loading:
        return <LoadingView />
      case videoApiStatusOb.success:
        return this.renderVideoDetailsSuccessView()
      case videoApiStatusOb.failure:
        return (
          <FailureView
            failureType="urlFailure"
            onClickRetry={this.onClickRetryVideoDetails}
          />
        )
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
            <HomeBg lightMode={lightMode} data-testid="gaming">
              <NavBar activeRoute="GAMING" />
              <HomeMainContainer>
                <LeftContainer lightMode={lightMode}>
                  <MenuCard activeRoute="GAMING" />
                  <Footer />
                </LeftContainer>
                <RightContainer>
                  {this.renderTrendingVideosView()}
                </RightContainer>
              </HomeMainContainer>
            </HomeBg>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default GamingVideos
