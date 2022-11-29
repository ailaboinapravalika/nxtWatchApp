import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  background-color: ${props => {
    console.log('main-bg', props.lightMode)
    return props.lightMode === 'light' ? '#f8fafc' : '#212121'
  }};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`

export const LoginCardContainer = styled(LoginBgContainer)`
  width: 80%;
  max-width: 550px;
  height: 62vh;
  min-height: 300px;
  max-height: 550px;
  padding: 16px;
  border-radius: 10px;
  background-color: ${props =>
    props.lightMode === 'light' ? '#f9f9f9' : '#000000'};
  box-shadow: 0px 4px 16px 0px
    ${props => (props.lightMode === 'light' ? '#d7dfe9' : ' #1e293b')};
  @media screen and (max-width: 768px) {
    width: 94%;
  }
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const LogoImg = styled.img`
  width: 140px;
  align-self: center;
`

export const LabelEle = styled.label`
  font-size: 13px;
  font-weight: 500;
  color: #94a3b8;
  margin-bottom: 10px;
  margin-top: 28px;
  color: ${props => (props.lightMode === 'light' ? '#181818' : '#ffffff')};
`

export const UsernameIn = styled.input`
  border: 1px solid #94a3b8;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 9px;
  padding-bottom: 9px;
  border-radius: 6px;
  color: #475569;
  font-size: 14px;
  width: 100%;
  background-color: transparent;
  outline: none;
`

export const LoginBtn = styled.button`
  border: 0px;
  border-radius: 8px;
  background-color: #3b82f6;
  color: #ffffff;
  width: 100%;
  height: 40px;
  padding-top: 9px;
  padding-bottom: 9px;
  text-align: center;
  font-size: 17px;
  font-weight: 600px;
  outline: none;
  cursor: pointer;
`

export const ErrorText = styled.p`
  color: #ff0b37;
`

export const ShowPasswordBg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`

export const ShowPasswordIn = styled(UsernameIn)`
  margin-top: 10px;
  width: 16px;
  height: 16px;
`

export const ShowPasswordText = styled(LabelEle)`
  font-size: 16px;
  margin-left: 10px;
  margin-top: 14px;
  font-weight: 300;
  color: ${props => (props.lightMode === 'light' ? '#181818' : '#ffffff')};
`
