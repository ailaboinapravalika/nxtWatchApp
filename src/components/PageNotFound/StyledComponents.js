import styled from 'styled-components'

export const PageNotFoundBg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding: 20px;
`

export const NotFoundImg = styled.img`
  width: 80%;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

export const NotFoundHeading = styled.h1`
  color: ${props => (props.lightMode === 'light' ? '#000000' : '#ffffff')};
  font-size: 32px;
  font-weight: 400;
`

export const NotFoundInfo = styled.p`
  color: ${props => (props.lightMode === 'light' ? '#000000' : '#e2e8f0')};
  font-size: 18px;
  font-weight: 400;
`
export const HomeBg = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.lightMode === 'light' ? '#f9f9f9' : '#181818'};
`

export const HomeMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  width: 100%;
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 990px;
  width: 18%;
  min-width: 180px;
  padding-top: 30px;
  background: ${props => (props.lightMode === 'light' ? '#f9f9f9' : '#212121')};
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  flex-grow: 1;
  width: 75%;
  background: ${props =>
    props.lightMode === 'light' ? ' #f4f4f4' : '#181818'};
`
