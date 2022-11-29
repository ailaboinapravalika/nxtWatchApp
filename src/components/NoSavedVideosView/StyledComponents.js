import styled from 'styled-components'

export const NoVideosBg = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;
  background-color: transparent;
  width: 100%;
  height: 100%;
`
export const NoVideosImg = styled.img`
  width: 80%;
  @media screen and (min-width: 768px) {
    width: 55%;
  }
`
export const NoVideosTitle = styled.h1`
  color: ${props => (props.lightMode === 'light' ? '#000000' : '#ffffff')};
  font-size: 32px;
  font-weight: 400;
`
export const NoVideosInfo = styled.p`
  color: ${props => (props.lightMode === 'light' ? '#000000' : '#e2e8f0')};
  font-size: 18px;
  font-weight: 400;
`
