import styled from 'styled-components'

export const VideoPlayerBg = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 90vh;
  font-family: 'Roboto';
  background-color: transparent;
`

export const VideoTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 0px;
  margin-top: 26px;
  color: ${props => (props.lightMode === 'light' ? '#212121' : '#ffffff')};
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

export const UserResponseDivLg = styled.div`
  display: flex;
  align-items: center;
`

export const VideoRatingsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
  margin-bottom: 20px;

  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`
export const Views = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-right: 8px;
  color: #64748b;
  color: ${props => (props.saveBtnText === 'Saved' ? '#2563eb' : '#64748b')};
  margin-left: 8px;
`

export const StaticsDiv = styled.div`
  display: flex;
  align-items: center;
`

export const LikeBtn = styled.button`
  text-align: center;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0px;
  color: ${props => (props.likeStatus === 'active' ? '#2563eb' : '#64748b')};
`

export const DisLikeBtn = styled.button`
  text-align: center;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0px;
  color: ${props => (props.disLikeStatus === 'active' ? '#2563eb' : '#64748b')};
`

export const SaveBtn = styled.button`
  text-align: center;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0px;
  color: ${props => (props.saveBtnText === 'Saved' ? '#2563eb' : '#64748b')};
`

export const Xline = styled.hr`
  width: 100%;
  border: 1px solid #64748b;
`

export const ChannelInfoDiv = styled.div`
  display: flex;
  align-items: center;
`

export const ChannelLogo = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 20px;
`

export const ChannelStatsDiv = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 30px;
  margin-bottom: 8px;
`

export const ChannelName = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 0px;
  color: ${props => (props.lightMode === 'light' ? '#212121' : '#ffffff')};
`
