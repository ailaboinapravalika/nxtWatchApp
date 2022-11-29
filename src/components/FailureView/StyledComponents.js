import styled from 'styled-components'

export const FailureViewBg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 100%;
  height: 100%;
`
export const FailureImg = styled.img`
  width: 50%;
`
export const FailureHeading = styled.h1`
  color: ${props => (props.lightMode === 'light' ? '#000000' : '#ffffff')};
  font-size: 32px;
  font-weight: 400;
`
export const FailureInfo = styled.p`
  color: ${props => (props.lightMode === 'light' ? '#000000' : '#e2e8f0')};
  font-size: 18px;
  font-weight: 400;
`

export const RetryBtn = styled.button`
  width: 120px;
  height: 40px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  outline: none;
  background-color: #4f46e5;
  color: #f1f5f9;
  border-radius: 8px;
  border: 0px;
`
