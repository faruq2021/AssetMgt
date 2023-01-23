import styled from 'styled-components'

const WelcomeText = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  
`

const Welcome = () => (
  <WelcomeText>Welcome to DigiAsset! Click on Audit Asset to begin Financial Transparency.</WelcomeText>
)

export default Welcome;