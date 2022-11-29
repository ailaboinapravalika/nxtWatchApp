import {
  RetryBtn,
  FailureInfo,
  FailureHeading,
  FailureImg,
  FailureViewBg,
} from './StyledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const FailureView = props => {
  const {failureType, onClickRetryVideoDetails} = props

  const onClickRetry = () => {
    onClickRetryVideoDetails()
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {lightMode} = value

        let failureImgUrl
        let failureImgAlt
        let failureHeadLine
        let failureInfoLine

        if (failureType === 'urlFailure') {
          failureImgUrl =
            lightMode === 'light'
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          failureImgAlt = 'failure view'
          failureHeadLine = 'Oops! Something Went Wrong'
          failureInfoLine =
            'We are having some trouble to complete your request. Please try again.'
        } else {
          failureImgUrl =
            'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'
          failureImgAlt = 'no videos'
          failureHeadLine = 'No Search results found'
          failureInfoLine = 'Try different key words or remove search filter'
        }

        return (
          <FailureViewBg>
            <FailureImg src={failureImgUrl} alt={failureImgAlt} />
            <FailureHeading lightMode={lightMode}>
              {failureHeadLine}
            </FailureHeading>
            <FailureInfo lightMode={lightMode}>{failureInfoLine}</FailureInfo>
            <RetryBtn type="button" onClick={onClickRetry} data-testid="retry">
              Retry
            </RetryBtn>
          </FailureViewBg>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureView
