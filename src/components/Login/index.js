import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginBgContainer,
  LoginCardContainer,
  LogoImg,
  LoginForm,
  LabelEle,
  UsernameIn,
  LoginBtn,
  ShowPasswordText,
  ShowPasswordBg,
  ErrorText,
  ShowPasswordIn,
} from './StyledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    submitStatusFailure: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  onSubmitFailure = errorText => {
    this.setState({errorMsg: errorText, submitStatusFailure: true})
  }

  onSubmitForm = async E => {
    E.preventDefault()

    const {username, password} = this.state
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)
    const responseData = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(responseData.jwt_token)
    } else {
      this.onSubmitFailure(responseData.error_msg)
    }
  }

  onChangeUserName = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  render() {
    const {
      password,
      username,
      showPassword,
      errorMsg,
      submitStatusFailure,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {lightMode} = value

          const logoImgUrl =
            lightMode === 'light'
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          const passwordType = showPassword ? 'text' : 'password'

          return (
            <LoginBgContainer lightMode={lightMode}>
              <LoginCardContainer lightMode={lightMode}>
                <LogoImg src={logoImgUrl} alt="website logo" />
                <LoginForm onSubmit={this.onSubmitForm}>
                  <LabelEle htmlFor="username" lightMode={lightMode}>
                    USERNAME
                  </LabelEle>
                  <UsernameIn
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={this.onChangeUserName}
                  />
                  <LabelEle htmlFor="password" lightMode={lightMode}>
                    PASSWORD
                  </LabelEle>
                  <UsernameIn
                    id="password"
                    type={passwordType}
                    placeholder="Password"
                    value={password}
                    onChange={this.onChangePassword}
                  />
                  <ShowPasswordBg>
                    <ShowPasswordIn
                      id="showPassword"
                      type="checkbox"
                      checked={showPassword}
                      onChange={this.onShowPassword}
                    />
                    <ShowPasswordText
                      htmlFor="showPassword"
                      lightMode={lightMode}
                    >
                      Show Password
                    </ShowPasswordText>
                  </ShowPasswordBg>
                  <LoginBtn type="submit">Login</LoginBtn>
                  {submitStatusFailure && (
                    <ErrorText>{`*${errorMsg}`}</ErrorText>
                  )}
                </LoginForm>
              </LoginCardContainer>
            </LoginBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
