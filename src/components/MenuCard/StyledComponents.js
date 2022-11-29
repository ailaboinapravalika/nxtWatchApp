import styled from 'styled-components'

export const MenuCardBg = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  background-color: transparent;
  @media screen and (max-width: 576px) {
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`

export const MenuListItem = styled.li`
  list-style-type: none;
  width: 100%;
  background-color: ${props => {
    switch (props.displayTheme) {
      case 'redLight':
        return '#e2e8f0'
      case 'redDark':
        return '#313131'
      default:
        return 'transparent'
    }
  }};
`

export const MenuOptionBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 0px;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  background-color: transparent;
`

export const IconBox = styled.div`
  padding: 0px;
  font-size: 20px;
  color: ${props => {
    switch (props.displayTheme) {
      case 'redLight':
        return '#ff0000'
      case 'redDark':
        return '#ff0b37'
      case 'onlyLight':
        return '#475569'
      case 'onlyDark':
        return '#e2e8f0'
      default:
        return null
    }
  }};
`

export const OptionName = styled.p`
  color: #001000;
  margin-left: 10px;
  width: 120px;
  text-align: left;
  color: ${props => {
    switch (props.displayTheme) {
      case 'redLight':
        return '#0f0f0f'
      case 'redDark':
        return '#ffffff'
      case 'onlyLight':
        return '#475569'
      case 'onlyDark':
        return '#e2e8f0'
      default:
        return null
    }
  }};
`
