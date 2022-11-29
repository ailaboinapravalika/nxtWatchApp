import styled from 'styled-components'

export const FooterBg = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background-color: transparent;
`

export const ContactUs = styled.p`
  color: #000000;
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.lightMode === 'light' ? '#000000' : '#ffffff')};
`

export const SocialOptionBox = styled.div`
  display: flex;
  align-items: center;
  width: 140px;
  justify-content: space-between;
`

export const SocialBtn = styled.button`
  cursor: pointer;
  outline: none;
  border: 0px;
  border-radius: 50%;
  background-color: transparent;
  padding: 0px;
`

export const SocialImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

export const EnjoyText = styled.p`
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.lightMode === 'light' ? '#000000' : '#ffffff')};
`
