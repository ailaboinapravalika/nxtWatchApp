import styled from 'styled-components'

export const HomeBg = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.lightMode === 'light' ? '#f9f9f9' : '#0f0f0f'};
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
  min-height: 66vh;
  flex-grow: 1;
  width: 75%;
  background-color: transparent;
`
export const TrendingBg = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: transparent;
`

export const VideosMainHeadingDiv = styled.div`
  display: flex;
  align-items: center;
  padding-left: 60px;
  padding-top: 18px;
  padding-bottom: 18px;
  width: 100%;
  background-color: ${props =>
    props.lightMode === 'light' ? '#ebebeb' : '#181818'};
`

export const TrendingLogo = styled.div`
  width: 80px;
  height: 80px;
  font-size: 30px;
  margin-right: 30px;
  color: #ff0000;
  background-color: ${props =>
    props.lightMode === 'light' ? '#e2e8f0' : '#0f0f0f'};
  border-radius: 50%;
  padding: 24px;
`

export const TrendingText = styled.h1`
  color: ${props => (props.lightMode === 'light' ? '#000000' : '#ffffff')};
  font-size: 34px;
  font-weight: 700;
`

export const TrendingVideosList = styled.ul`
  padding: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  min-height: 30vh;
  width: 100%;
  margin-top: 0px;
  background-color: ${props =>
    props.lightMode === 'light' ? '#f4f4f4' : '#000000'};
`
