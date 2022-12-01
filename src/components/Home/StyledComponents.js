import styled from 'styled-components'

export const HomeBg = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.lightMode === 'light' ? '#f9f9f9' : '#181818'};
`

export const BottomBg = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 400px;
  width: 100%;

  background-color: ${props =>
    props.lightMode === 'light' ? '#f8fafc' : '#0f0f0f'};
  @media screen and (min-width: 576px) {
    padding: 30px;
  }
`

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 88%;
  height: 90px;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    width: 58%;
  }
`

export const SearchBar = styled.input`
  width: 80%;
  height: 40px;
  border-radius: 6px;
  border: 1px solid #64748b;
  padding-left: 20px;
  padding-top: 2px;
  padding-bottom: 6px;
  color: #616e7c;
  font-size: 14px;
  background-color: ${props =>
    props.lightMode === 'light' ? '#ffffff' : '#000000'};
`

export const SearchButton = styled.button`
  width: 80px;
  height: 40px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  background-color: ${props =>
    props.lightMode === 'light' ? '#ebebeb' : '#313131'};
  color: ${props => (props.lightMode === 'light' ? '#475569' : '#64748b')};
  border-radius: 2px;
  border: 1px solid #64748b;
`

export const VideosListContainer = styled(HomeBg)`
  min-height: 30vh;
  width: 100%;
  background-color: transparent;

  @media screen and (min-width: 576px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
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
