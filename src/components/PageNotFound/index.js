import {
  PageNotFoundBg,
  NotFoundImg,
  NotFoundHeading,
  NotFoundInfo,
  HomeBg,
  HomeMainContainer,
  LeftContainer,
  RightContainer,
} from './StyledComponents'

import NavBar from '../NavBar'
import MenuCard from '../MenuCard'
import Footer from '../Footer'

import NxtWatchContext from '../../context/NxtWatchContext'

const PageNotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {lightMode} = value

      const notFoundUrl =
        lightMode === 'light'
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <HomeBg lightMode={lightMode} data-testid="home">
          <NavBar />
          <HomeMainContainer>
            <LeftContainer lightMode={lightMode}>
              <MenuCard />
              <Footer />
            </LeftContainer>
            <RightContainer lightMode={lightMode}>
              <PageNotFoundBg lightMode={lightMode}>
                <NotFoundImg src={notFoundUrl} alt="not found" />
                <NotFoundHeading lightMode={lightMode}>
                  Page Not Found
                </NotFoundHeading>
                <NotFoundInfo lightMode={lightMode}>
                  We are sorry, the page you requested could not be found.
                </NotFoundInfo>
              </PageNotFoundBg>
            </RightContainer>
          </HomeMainContainer>
        </HomeBg>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default PageNotFound
