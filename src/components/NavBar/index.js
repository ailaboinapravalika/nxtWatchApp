import {FiLogOut} from 'react-icons/fi'

import {FaMoon} from 'react-icons/fa'

import {RiSunLine} from 'react-icons/ri'
import {CgClose} from 'react-icons/cg'

import {GiHamburgerMenu} from 'react-icons/gi'

import {Link, withRouter} from 'react-router-dom'

import Popup from 'reactjs-popup'

import MenuCard from '../MenuCard'
import LogoutPopup from '../LogoutPopup'

import {
  NavBarBg,
  LogoImg,
  NavOptionsBgSm,
  NavOptionsBgLg,
  NavOption,
  NavOptionLg,
  OptionButton,
  ProfileOptionBtn,
  ProfileImg,
  LogoutBtn,
  MenuPopupBg,
  MenuCloseBtn,
} from './StyledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const overlayStyle = {
  backgroundColor: `rgba(0, 0, 0, 0.5)`,
}

const NavBar = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {lightMode, onChangeDisplayMode} = value
      const {activeRoute} = props

      const changeMode = () => {
        onChangeDisplayMode()
      }

      let nxtWatchLogoUrl
      let modeBtnIcon

      if (lightMode === 'light') {
        nxtWatchLogoUrl =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        modeBtnIcon = <FaMoon />
      } else {
        nxtWatchLogoUrl =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        modeBtnIcon = <RiSunLine />
      }

      const renderProfileBtn = () => (
        <ProfileOptionBtn>
          <ProfileImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
        </ProfileOptionBtn>
      )

      const renderDisplayMode = () => (
        <ProfileOptionBtn
          type="button"
          onClick={changeMode}
          lightMode={lightMode}
          data-testid="theme"
        >
          {modeBtnIcon}
        </ProfileOptionBtn>
      )

      return (
        <NavBarBg lightMode={lightMode}>
          <Link to="/">
            <LogoImg src={nxtWatchLogoUrl} alt="website logo" />
          </Link>
          <NavOptionsBgSm>
            <NavOption key="theme">
              <OptionButton
                lightMode={lightMode}
                type="button"
                onClick={changeMode}
                data-testid="theme"
              >
                {modeBtnIcon}
              </OptionButton>
            </NavOption>
            <NavOption key="menu">
              <OptionButton lightMode={lightMode}>
                <Popup
                  className="popup-content"
                  trigger={<GiHamburgerMenu />}
                  modal
                  closeOnDocumentClick
                >
                  {close => (
                    <MenuPopupBg lightMode={lightMode}>
                      <MenuCloseBtn onClick={close} lightMode={lightMode}>
                        <CgClose />
                      </MenuCloseBtn>
                      <MenuCard activeRoute={activeRoute} close={close} />
                    </MenuPopupBg>
                  )}
                </Popup>
              </OptionButton>
            </NavOption>
            <NavOption key="logout">
              <Popup
                className="popup-content"
                modal
                trigger={
                  <OptionButton type="button" lightMode={lightMode}>
                    <FiLogOut />
                  </OptionButton>
                }
                position="bottom left"
                overlayStyle={overlayStyle}
              >
                {close => <LogoutPopup close={close} />}
              </Popup>
            </NavOption>
          </NavOptionsBgSm>
          <NavOptionsBgLg>
            <NavOptionLg key="theme">{renderDisplayMode()}</NavOptionLg>
            <NavOptionLg key="menu">{renderProfileBtn()}</NavOptionLg>
            <NavOptionLg key="logout">
              <Popup
                className="popup-content"
                modal
                trigger={<LogoutBtn type="button">Logout</LogoutBtn>}
                position="bottom left"
                overlayStyle={overlayStyle}
              >
                {close => <LogoutPopup close={close} />}
              </Popup>
            </NavOptionLg>
          </NavOptionsBgLg>
        </NavBarBg>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(NavBar)
