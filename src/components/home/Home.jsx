import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { CgGoogle, CgFacebook, CgMicrosoft } from 'react-icons/cg';
// import introvideo from  "/intro.mp4"
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        {/* <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        > */}
        <div className='bannerdiv'>
          <div className='logodiv'>
          <Image
            className="logoimg"
     
            src="/logo.png"
          
          />
          </div>
      

          <VStack width={['full',"full"]} alignItems={['center', 'center']}
         spacing="6"
          
          >
            <Heading children="BEST COURSES" size={["xl",'2xl']} />
            <Text 
            textAlign={["center","center"]} children="YOU CAN'T FIND BEST COURSE THEN THIS I GUARENTEE YOU " />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="blue">
                FIND your course
              </Button>
            </Link>
          </VStack>
          </div>
        {/* </Stack> */}
      </div>

      <Box padding="8" className="brandbox" 
       >
        <Heading
          children="OUR BRANDS"
          textAlign={'center'}
          fontFamily={'body'}
        />
        <HStack
          className="brandsbanner"
          justifyContent={'center'}
          gap="117"
          marginTop="8"
        >
          <CgFacebook />
          <CgGoogle />
          <CgMicrosoft />
        </HStack>
      </Box>

      <div className='container2'>
        <video src='/intro.mp4' controls autoPlay
        controlsList='nodownload  nofullscreen'
        disablePictureInPicture
        disableRemotePlayback
        >

        </video>
      </div>
    </section>
  );
};

export default Home;
