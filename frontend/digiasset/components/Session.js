import styled from 'styled-components'

const ImageTextContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1000px;
`

const Image = styled.img`
  width: 2000px;
  height: 400px;
  margin-left: 1rem;
`

const Text = styled.div``

const ImageText = () => (
  <ImageTextContainer>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede
    </Text>
    <Image src='https://bitcoin.org/img/icons/opengraph.png' alt='Bitcoin'/>
  </ImageTextContainer>
)

export default ImageText

