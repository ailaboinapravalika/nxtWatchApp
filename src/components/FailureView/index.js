import {
  Button,
  FailureInfo,
  FailureHeading,
  FailureImg,
  FailureViewBg,
} from './StyledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const FailureView = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {lightMode} = value

      const {failureType, onClickRetry} = props

      const onClickBtn = () => {
        onClickRetry()
      }

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
          <Button type="button" onClick={onClickBtn}>
            Retry
          </Button>
        </FailureViewBg>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default FailureView
