import styled from 'styled-components'

const WelcomeText = styled.div`
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
`

const Welcome = () => (
  <WelcomeText>Welcome to DigiAsset! Click on Audit Asset to begin Financial Transparency.</WelcomeText>
)

export default Welcome;