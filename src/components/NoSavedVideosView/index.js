import {
  NoVideosBg,
  NoVideosImg,
  NoVideosTitle,
  NoVideosInfo,
} from './StyledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const NoSavedVideosView = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {lightMode} = value

      return (
        <NoVideosBg>
          <NoVideosImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoVideosTitle lightMode={lightMode}>
            No saved videos found
          </NoVideosTitle>
          <NoVideosInfo lightMode={lightMode}>
            You can save your videos while watching them
          </NoVideosInfo>
        </NoVideosBg>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NoSavedVideosView
