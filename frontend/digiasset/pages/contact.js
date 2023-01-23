import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import Nav from '@/components/Nav';
import Footer from "@/components/Footer"
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

export default function Contact() {
  return (
    <>
    <Nav/>
      <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            bg="#02054B"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Heading>Contact</Heading>
              <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                You can reach us through any of these channels
              </Text>
              <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                <VStack pl={0} spacing={3} alignItems="flex-start">
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="ghost"
                    color="#DCE2FF"
                    _hover={{ border: '2px solid #1C6FEB' }}
                    leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                    +91-988888888
                  </Button>
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="ghost"
                    color="#DCE2FF"
                    _hover={{ border: '2px solid #1C6FEB' }}
                    leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                    hello@abc.com
                  </Button>
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="ghost"
                    color="#DCE2FF"
                    _hover={{ border: '2px solid #1C6FEB' }}
                    leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                    Ilorin, Near Iyana Ontario
                  </Button>
                </VStack>
              </Box>
              <HStack
                mt={{ lg: 10, md: 10 }}
                spacing={5}
                px={5}
                alignItems="flex-start">
                <IconButton
                  aria-label="facebook"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: '#0D74FF' }}
                  icon={<MdFacebook size="28px" />}
                />
                <IconButton
                  aria-label="github"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: '#0D74FF' }}
                  icon={<BsGithub size="28px" />}
                />
                <IconButton
                  aria-label="discord"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: '#0D74FF' }}
                  icon={<BsDiscord size="28px" />}
                />
              </HStack>
            </Box>
          </Box>
        </Flex>
      </Container>
      <Footer/>
    </>
  )
}