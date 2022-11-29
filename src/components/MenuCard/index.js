import {RiHome4Fill} from 'react-icons/ri'

import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'

import {CgPlayListAdd} from 'react-icons/cg'

import {Link, withRouter} from 'react-router-dom'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  MenuCardBg,
  MenuListItem,
  MenuOptionBtn,
  OptionName,
  IconBox,
} from './StyledComponents'

const menuOptionsList = [
  {
    name: 'Home',
    id: 'HOME',
    iconName: <RiHome4Fill />,
    linkTo: '/',
  },
  {
    name: 'Trending',
    id: 'TRENDING',
    iconName: <HiFire />,
    linkTo: '/trending',
  },
  {
    name: 'Gaming',
    id: 'GAMING',
    iconName: <SiYoutubegaming />,
    linkTo: '/gaming',
  },
  {
    name: 'Saved videos',
    id: 'SAVED',
    iconName: <CgPlayListAdd />,
    linkTo: '/saved-videos',
  },
]

const MenuCard = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {lightMode, onChangeActiveView} = value
      const {activeRoute, close} = props

      return (
        <MenuCardBg lightMode={lightMode}>
          {menuOptionsList.map(option => {
            const onClickMenuBtn = () => {
              close()
              onChangeActiveView(option.id)
            }

            let displayTheme

            if (activeRoute === option.id) {
              displayTheme = lightMode === 'light' ? 'redLight' : 'redDark'
            } else {
              displayTheme = lightMode === 'light' ? 'onlyLight' : 'onlyDark'
            }

            return (
              <Link style={{textDecoration: 'none'}} to={option.linkTo}>
                <MenuListItem
                  key={option.id}
                  onClick={onClickMenuBtn}
                  displayTheme={displayTheme}
                >
                  <MenuOptionBtn>
                    <IconBox displayTheme={displayTheme}>
                      {option.iconName}
                    </IconBox>

                    <OptionName displayTheme={displayTheme}>
                      {option.name}
                    </OptionName>
                  </MenuOptionBtn>
                </MenuListItem>
              </Link>
            )
          })}
        </MenuCardBg>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(MenuCard)
