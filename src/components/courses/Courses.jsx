import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  pseudoSelectors,
  Stack,
  Text,
  tokenToCSSVar,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addToplaylist, getCourses } from '../../redux/actions/courseAction';
import { getmyprofile } from '../../redux/actions/userAction';
import './courses.css';
const Courses = () => {
  const [keyword, setkeyword] = useState('');
  const [category, setcategory] = useState('');
  const dispatch=useDispatch()
  const {loading,courses,error,message}=useSelector(state=>state.courses)
   let categories = [
    'WEB DEVELOPEMENT',
    'UI/UX',
    'APP DEVELOPEMENT',
    'DATA STRUCTURE',
    'INTERVIEW PREPEARATION',
    'MACHINE LEARNING',
    'BLOCKCHAIN DEVELOPEMENT',
  ];
  async function addtocarthandler(id) {
   await dispatch(addToplaylist(id))
   dispatch(getmyprofile())
  }
  useEffect(()=>{
dispatch(getCourses(category,keyword))

if(message){
  toast.success(message)
  dispatch({type:"clearmessage"})
}
if(error){
toast.error(error)
dispatch({type:"clearerror"})
}
},[keyword,category,message,error,dispatch])

  
  const Course = ({
    title,
    description,
    views,
    imagesrc,
    lecturecount,
    id,
    creator,
    loading
  }) => {
    return (
      <VStack className="course" alignItems={['center', 'flex-start']}>
        <Image
          src={imagesrc}
          objectFit="contain"
          boxSize={'60'}
        />
        <Heading
          children={title}
          textAlign={['center', 'left']}
          maxW="200px"
          fontFamily={'sans-serif'}
          noOfLines="3"
          size={'sm'}
        />
        <Text children={description} noOfLines="2" />

        <HStack>
          <Text fontWeight={'bold'} children="creator : " />
          <Text fontFamily={'body'} children={creator} />
        </HStack>
        <Heading
          children={` lectures = ${lecturecount}`}
          textAlign={'center'}
          size="xs"
        />
        <Heading
          children={` views = ${views}`}
          textAlign={'center'}
          size="xs"
        />

        <Stack direction={['column', 'row']} alignItems="center">
          <NavLink to={`/course/${id}`}>
            <Button  colorScheme={'blue'}>WATCH NOW</Button>
          </NavLink>
          <Button
          isLoading={loading}
            colorScheme={'blue'}
            variant="ghost"
            onClick={() => addtocarthandler(id)}
          >
            ADD TO CART
          </Button>
        </Stack>
      </VStack>
    );
  };
  return (
    <Container minH={'95vh'} maxW="container.lg" padding={'8'}>
      <Heading children="ALL COURSE" m={'8'} />

      <Input
        value={keyword}
        placeholder="SEARCH COURSE"
        type={'text'}
        onChange={e => setkeyword(e.target.value)}
      />
      <HStack
        overflowX={'auto'}
        padding="8"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((item, index) => {
          return (
            <Button
              onClick={() =>
                 setcategory(item)
               
              }
              key={index}
              minW="56"
            >
              <Text children={item} />
            </Button>
          );
        })}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
               {
                courses ?
     courses.map((item)=>{
      return ( <Course
      title={item.title}
      description={item.description}
      views={item.views}
      imagesrc={item.poster.url}
      id={item._id}
      creator={item.createdby}
      addtocarthandler={addtocarthandler}
      lecturecount={item.noOfVideos}
      loading={loading}
    />)
    }) : <Heading children="Sorry , Course Not Found"/>
               }
   
       
      </Stack>
    </Container>
  );
};

export default Courses;
