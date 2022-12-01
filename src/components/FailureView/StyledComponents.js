import styled from 'styled-components'

export const FailureViewBg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 100%;
  height: 100%;
  max-height: 600px;
`
export const FailureImg = styled.img`
  width: 40%;
  max-width: 300px;
`
export const FailureHeading = styled.h1`
  color: ${props => (props.lightMode === 'light' ? '#000000' : '#ffffff')};
  font-size: 32px;
  font-weight: 400;
  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
`
export const FailureInfo = styled.p`
  color: ${props => (props.lightMode === 'light' ? '#000000' : '#e2e8f0')};
  font-size: 18px;
  font-weight: 400;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`

export const Button = styled.button`
  width: 120px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  background-color: #4f46e5;
  color: #f1f5f9;
  border: 0px;
  border-radius: 8px;
  padding-left: 30px;
  padding-bottom: 10px;
  padding-right: 30px;
  padding-top: 10px;
`
