import styled from 'styled-components'

export const LogoutPopupDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: ${props =>
    props.lightMode === 'light' ? '#ffffff' : '#313131'};
  border-radius: 16px;
`

export const SureText = styled.p`
  font-size: 18px;
  color: ${props => (props.lightMode === 'light' ? '#00306e' : '#ffffff')};
`

export const BtnsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`

export const CancelBtn = styled.button`
  cursor: pointer;
  outline: none;
  border: 2px solid #64748b;
  color: #64748b;
  font-size: 13px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: transparent;
  border-radius: 4px;
`

export const ConfirmBtn = styled(CancelBtn)`
  background-color: #3b82f6;
  color: #ffffff;
  border: 0px;
`
