import {RiCloseLine} from 'react-icons/ri'

import {
  BannerBg,
  NxtLogoBg,
  NxtWatchLogo,
  CloseBtn,
  SubscribeText,
  GetBtn,
} from './StyledComponents'

const Banner = props => {
  const {onClickBannerClose} = props

  const onClickCloseBtn = () => {
    onClickBannerClose()
  }
  return (
    <BannerBg data-testid="banner">
      <NxtLogoBg>
        <NxtWatchLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <CloseBtn type="button" data-testid="close" onClick={onClickCloseBtn}>
          <RiCloseLine />
        </CloseBtn>
      </NxtLogoBg>
      <SubscribeText>
        Buy Nxt Watch Premium prepaid plans with UPI
      </SubscribeText>
      <GetBtn type="button">GET IT NOW</GetBtn>
    </BannerBg>
  )
}

export default Banner
