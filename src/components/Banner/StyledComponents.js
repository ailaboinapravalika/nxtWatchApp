import styled from 'styled-components'

export const BannerBg = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 260px;
  padding: 40px;
  width: 100%;
`

export const NxtLogoBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NxtWatchLogo = styled.img`
  width: 200px;
  height: 55px;
`

export const CloseBtn = styled.button`
  cursor: pointer;
  outline: none;
  border: 0px;
  background-color: transparent;
  font-size: 30px;
  padding: 0px;
`
export const SubscribeText = styled.p`
  font-size: 20px;
  color: #1e293b;
  font-weight: 500;
  width: 80%;
  margin-bottom: 50px;
`

export const GetBtn = styled(CloseBtn)`
  border: 1px solid #000000;
  font-size: 18px;
  color: #000000;
  background-color: transparent;
  width: 160px;
  padding: 8px;
  font-weight: 600;
`
