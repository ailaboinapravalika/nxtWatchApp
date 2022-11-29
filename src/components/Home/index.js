import {Component} from 'react'

import Cookies from 'js-cookie'

import {AiOutlineSearch} from 'react-icons/ai'

import {
  HomeBg,
  BottomBg,
  SearchBox,
  SearchBar,
  SearchButton,
  VideosListContainer,
  HomeMainContainer,
  RightContainer,
  LeftContainer,
} from './StyledComponents'

import NavBar from '../NavBar'

import Banner from '../Banner'

import VideoCard from '../VideoCard'
import MenuCard from '../MenuCard'
import Footer from '../Footer'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'
import NxtWatchContext from '../../context/NxtWatchContext'

const homeApiStatus = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    apiStatus: homeApiStatus.initial,
    videosList: [],
    searchParam: '',
    showBanner: true,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {searchParam} = this.state
    this.setState({apiStatus: homeApiStatus.loading})
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchParam}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(homeVideosApiUrl, options)
    const responseData = await response.json()
    if (response.ok) {
      const newVideosList = responseData.videos

      const formattedVideosList = newVideosList.map(video => ({
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
        id: video.id,
        publishedAt: video.published_at,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
      }))

      this.setState({
        apiStatus: homeApiStatus.success,
        videosList: formattedVideosList,
      })
    } else {
      this.setState({apiStatus: homeApiStatus.failure})
    }
  }

  onClickRetryVideoDetails = () => {
    this.getVideos()
  }

  renderFailureView = () => (
    <FailureView
      failureType="urlFailure"
      onClickRetryVideoDetails={this.onClickRetryVideoDetails}
    />
  )

  renderSearchNotFoundView = () => (
    <FailureView
      failureType="searchFailure"
      onClickRetryVideoDetails={this.onClickRetryVideoDetails}
    />
  )

  renderLoadingView = () => <LoadingView />

  onSearchTyping = e => {
    const searchKey = e.key

    if (searchKey === 'Enter') {
      this.getVideos()
    }
  }

  onSearchWord = e => {
    this.setState({searchParam: e.target.value}, this.getVideos)
  }

  onClickSearchBtn = () => {
    this.getVideos()
  }

  onClickBannerClose = () => {
    this.setState({showBanner: false})
  }

  totalVideosList = () => {
    const {videosList} = this.state

    return (
      <VideosListContainer>
        {videosList.map(video => (
          <VideoCard videoDetails={video} id={video.id} />
        ))}
      </VideosListContainer>
    )
  }

  renderSuccessView = () => {
    const {videosList} = this.state

    const videosListLength = videosList.length

    if (videosListLength > 0) {
      return this.totalVideosList()
    }

    return this.renderSearchNotFoundView()
  }

  onRenderVideosContainer = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case homeApiStatus.loading:
        return this.renderLoadingView()
      case homeApiStatus.success:
        return this.renderSuccessView()
      case homeApiStatus.failure:
        return this.renderFailureView()

      default:
        return null
    }
  }

  render() {
    const {searchParam, showBanner} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {lightMode} = value

          return (
            <HomeBg lightMode={lightMode} data-testid="home">
              <NavBar activeRoute="HOME" />
              <HomeMainContainer>
                <LeftContainer lightMode={lightMode}>
                  <MenuCard activeRoute="HOME" />
                  <Footer />
                </LeftContainer>
                <RightContainer>
                  {showBanner && (
                    <Banner onClickBannerClose={this.onClickBannerClose} />
                  )}
                  <BottomBg lightMode={lightMode}>
                    <SearchBox>
                      <SearchBar
                        lightMode={lightMode}
                        type="search"
                        value={searchParam}
                        placeholder="Search"
                        onKeyDown={this.onSearchTyping}
                        onChange={this.onSearchWord}
                      />
                      <SearchButton
                        lightMode={lightMode}
                        onClick={this.onClickSearchBtn}
                        data-testid="searchButton"
                      >
                        <AiOutlineSearch />
                      </SearchButton>
                    </SearchBox>
                    {this.onRenderVideosContainer()}
                  </BottomBg>
                </RightContainer>
              </HomeMainContainer>
            </HomeBg>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
