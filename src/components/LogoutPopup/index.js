import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LogoutPopupDiv,
  SureText,
  BtnsBox,
  CancelBtn,
  ConfirmBtn,
} from './StyledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const LogoutPopup = props => {
  const {close} = props

  const onClickConfirm = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {lightMode} = value

        return (
          <LogoutPopupDiv lightMode={lightMode}>
            <SureText lightMode={lightMode}>
              Are you sure, you want to logout?
            </SureText>
            <BtnsBox>
              <CancelBtn onClick={close}>Cancel</CancelBtn>
              <ConfirmBtn onClick={onClickConfirm}>Confirm</ConfirmBtn>
            </BtnsBox>
          </LogoutPopupDiv>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(LogoutPopup)
