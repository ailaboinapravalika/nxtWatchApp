import {Component} from 'react'

import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import LoadingView from '../LoadingView'

import FailureView from '../FailureView'

import NavBar from '../NavBar'

import TrendingVideoCard from '../TrendingVideoCard'

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

class Trending extends Component {
  state = {videoApiStatus: videoApiStatusOb.initial, trendingVideosList: []}

  componentDidMount() {
    this.setState({videoApiStatus: videoApiStatusOb.loading})
    this.getVideoDetails()
  }

  getFormattedVideoObject = videoDetails => ({
    id: videoDetails.id,
    title: videoDetails.title,
    thumbnailUrl: videoDetails.thumbnail_url,
    channel: {
      name: videoDetails.channel.name,
      profileImageUrl: videoDetails.channel.profile_image_url,
    },
    viewCount: videoDetails.view_count,
    publishedAt: videoDetails.published_at,
  })

  getVideoDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const trendingVideosApiUrl = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(trendingVideosApiUrl, options)
    const responseData = await response.json()
    if (response.ok) {
      const videosList = responseData.videos
      const formattedVideosList = videosList.map(video =>
        this.getFormattedVideoObject(video),
      )

      this.setState({
        videoApiStatus: videoApiStatusOb.success,
        trendingVideosList: formattedVideosList,
      })
    } else {
      this.setState({
        videoApiStatus: videoApiStatusOb.failure,
        trendingVideosList: [],
      })
    }
  }

  onClickRetryVideoDetails = () => {
    this.getVideoDetails()
  }

  renderVideoDetailsSuccessView = () => {
    const {trendingVideosList} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {lightMode} = value

          return (
            <TrendingBg>
              <VideosMainHeadingDiv lightMode={lightMode} data-testid="banner">
                <TrendingLogo lightMode={lightMode}>
                  <HiFire />
                </TrendingLogo>

                <TrendingText lightMode={lightMode}>Trending</TrendingText>
              </VideosMainHeadingDiv>
              <TrendingVideosList lightMode={lightMode}>
                {trendingVideosList.map(video => (
                  <TrendingVideoCard videoDetails={video} key={video.id} />
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
            <HomeBg lightMode={lightMode} data-testid="trending">
              <NavBar activeRoute="TRENDING" />
              <HomeMainContainer>
                <LeftContainer lightMode={lightMode}>
                  <MenuCard activeRoute="TRENDING" />
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

export default Trending
