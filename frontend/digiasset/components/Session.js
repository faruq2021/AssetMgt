import styled from 'styled-components'

const ImageTextContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  height: 300px
  margin-right: 1rem
`

const Image = styled.img`
  width: 1000px;
  height: 300px;
  margin-left: 1rem;
`

const Text = styled.div``

const ImageText = () => (
  <ImageTextContainer>
    <Text>
    Our digital asset management app allows the public to easily track 
    the financial activities of public servants for financial transparency, 
    audit and integrity. With our platform, you can access real-time information 
    on financial transactions, budgets, and expenses, providing a clear picture 
    of how public funds are being used. By promoting financial transparency and 
    accountability, we aim to promote integrity and trust in government institutions.
    </Text>
    <Image src='https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Bitcoin'/>
  </ImageTextContainer>
)

export default ImageText

