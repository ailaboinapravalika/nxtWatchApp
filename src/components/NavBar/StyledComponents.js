import styled from 'styled-components'

export const NavBarBg = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 14px;
  padding-bottom: 14px;
  align-items: center;
  background: ${props => (props.lightMode === 'light' ? '#f9f9f9' : '#212121')};
  @media screen and (min-width: 768px) {
    padding-left: 100px;
    padding-right: 100px;

    padding-top: 20px;
    padding-bottom: 20px;
  }
`

export const LogoImg = styled.img`
  width: 170px;
`

export const NavOptionsBgSm = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  padding-left: 0px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavOptionsBgLg = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 280px;
  padding-left: 0px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ProfileOptionBtn = styled.button`
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  border: 0px;
  width: 40px;
  height: 40px;
  font-size: 36px;
  background-color: transparent;
  color: ${props => (props.lightMode === 'light' ? '#000000' : '#ffffff')};
`

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px; ;
`

export const NavOption = styled.li`
  list-style: none;
  width: 44px;
  height: 44px;
`

export const NavOptionLg = styled.li`
  list-style: none;
  padding: 0px;
`

export const OptionButton = styled.button`
  outline: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
  font-size: 36px;
  padding: 0px;
  border: 0px;
  background-color: transparent;
  color: ${props => (props.lightMode === 'light' ? '#000000' : '#ffffff')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutBtn = styled.button`
  cursor: pointer;
  outline: none;
  border: 1px solid #3b82f6;
  color: #3b82f6;
  font-size: 16px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: transparent;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const MenuPopupBg = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props =>
    props.lightMode === 'light' ? '#f9f9f9' : '#383838'};
  padding: 10px;
  display: flex;
  flex-direction: column;
`

export const MenuCloseBtn = styled.button`
  cursor: pointer;
  outline: none;
  font-size: 40px;
  align-self: flex-end;
  background-color: transparent;
  color: ${props => (props.lightMode === 'light' ? '#000000' : '#ffffff')};
  border: 0px;
`
