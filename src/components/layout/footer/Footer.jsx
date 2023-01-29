import React from 'react';
import { Box, Heading, HStack, VStack,Text } from '@chakra-ui/react';
import './footer.css';
import {
  TiSocialYoutubeCircular,
  
  TiSocialInstagramCircular,
  TiSocialGithubCircular,
  TiSocialFacebookCircular,
} from 'react-icons/ti';
const Footer = () => {
  return (
    <Box 
     padding={'4'} className="footerbox" minH={'10vh'}>
       <VStack>
        <Heading fontFamily={"sans-serif"} letterSpacing={"1px"} color="white" marginBottom={"3"} children="Social Handles" size={"md"}/>
      <HStack
        spacing={['2', '10']}
        justifyContent="center"
        color={"whiteAlpha.800"}
        fontSize="40"
      >
        <a href="" target={'_blank'}>
          <TiSocialInstagramCircular />
        </a>
        <a href="" target={'_blank'}>
          <TiSocialGithubCircular />
        </a>
        <a href="" target={'_blank'}>
          <TiSocialYoutubeCircular />
        </a>
        <a href="" target={'_blank'}>
          <TiSocialFacebookCircular />
        </a>
      </HStack>
      </VStack>
      <VStack marginTop={"10"} alignItems={'center'}
      justifyContent="center"
      width="full">
       <Text color={"whiteAlpha.800"} fontSize={"20px"} letterSpacing="1px"
       textAlign={"center"}
       >
        @Copyrights By <span style={{fontSize:"22px",
      color:"white"}}>FIT CODER</span>. All Rights Reserved 
       </Text>
      </VStack>
      
    </Box>
  );
};

export default Footer;
