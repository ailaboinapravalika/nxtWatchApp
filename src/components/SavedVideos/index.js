import {HiFire} from 'react-icons/hi'

import NoSavedVideosView from '../NoSavedVideosView'

import NavBar from '../NavBar'

import TrendingVideoCard from '../TrendingVideoCard'

import MenuCard from '../MenuCard'

import Footer from '../Footer'

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

import NxtWatchContext from '../../context/NxtWatchContext'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {lightMode, savedVideosList} = value

      const noSavedVideos = savedVideosList.length === 0

      return (
        <HomeBg lightMode={lightMode} data-testid="savedVideos">
          <NavBar activeRoute="SAVED" />
          <HomeMainContainer>
            <LeftContainer lightMode={lightMode}>
              <MenuCard activeRoute="SAVED" />
              <Footer />
            </LeftContainer>
            <RightContainer>
              {noSavedVideos ? (
                <NoSavedVideosView />
              ) : (
                <TrendingBg>
                  <VideosMainHeadingDiv
                    lightMode={lightMode}
                    data-testid="banner"
                  >
                    <TrendingLogo lightMode={lightMode}>
                      <HiFire />
                    </TrendingLogo>

                    <TrendingText lightMode={lightMode}>
                      Saved Videos
                    </TrendingText>
                  </VideosMainHeadingDiv>
                  <TrendingVideosList lightMode={lightMode}>
                    {savedVideosList.map(video => (
                      <TrendingVideoCard videoDetails={video} id={video.id} />
                    ))}
                  </TrendingVideosList>
                </TrendingBg>
              )}
            </RightContainer>
          </HomeMainContainer>
        </HomeBg>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos
