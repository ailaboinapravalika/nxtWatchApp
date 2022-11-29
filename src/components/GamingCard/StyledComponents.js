import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingCardBg = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  width: 100%;
  height: 100%;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 10px;
  margin-bottom: 50px;

  width: 40%;

  @media screen and (min-width: 576px) {
    width: 27%;
  }
`

export const GameImg = styled.img`
  width: 100%;
  height: 70%;
`

export const Name = styled.p`
  color: ${props => (props.lightMode === 'light' ? '#212121' : '#ffffff')};
  font-size: 16px;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 0px;
`

export const CountWatching = styled.p`
  margin-top: 10px;
  color: #64748b;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 0px;
`
