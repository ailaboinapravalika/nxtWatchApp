import {withRouter} from 'react-router-dom'

import {
  GamingCardBg,
  StyledLink,
  GameImg,
  Name,
  CountWatching,
} from './StyledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const GamingCard = props => {
  const {gameData} = props
  const {id, title, thumbnailUrl, viewCount} = gameData

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {lightMode} = value

        return (
          <StyledLink to={`/videos/${id}`}>
            <GamingCardBg key={id}>
              <GameImg src={thumbnailUrl} alt="video thumbnail" />
              <Name lightMode={lightMode}>{title}</Name>
              <CountWatching>{viewCount} Watching Worldwide</CountWatching>
            </GamingCardBg>
          </StyledLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(GamingCard)
