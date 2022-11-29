import {
  FooterBg,
  ContactUs,
  SocialOptionBox,
  SocialBtn,
  SocialImg,
  EnjoyText,
} from './StyledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const Footer = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {lightMode} = value

      return (
        <FooterBg>
          <ContactUs lightMode={lightMode}>CONTACT US</ContactUs>
          <SocialOptionBox>
            <SocialBtn>
              <SocialImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
            </SocialBtn>
            <SocialBtn>
              <SocialImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
            </SocialBtn>
            <SocialBtn>
              <SocialImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialBtn>
          </SocialOptionBox>
          <EnjoyText lightMode={lightMode}>
            Enjoy! Now to see your channels and recommendations!
          </EnjoyText>
        </FooterBg>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Footer
