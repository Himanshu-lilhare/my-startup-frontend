import {
  Avatar,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { removeFromPlaylist, updateProfilePictureAction } from '../../redux/actions/profileAction';
import { cancleSubscription } from '../../redux/actions/subscribeAction';
import { getmyprofile } from '../../redux/actions/userAction';
import { editvalue } from '../auth/Register';

const Profile = ({user}) => {
  // const user = {
  //   name: 'Raj Lilhare',
  //   email: 'rajlilhare200@gmail.com',
  //   createdat: String(new Date().toISOString()),
  //   role: 'xyz',
  //   subscription: {
  //     status: 'active',
  //   },
  //   playlist: [
  //     {
  //       course: 'id',
  //       poster: 'imageurl',
  //     },
  //   ],
  // };
  const dispatch=useDispatch()
const {loading,message,error}=useSelector(state=>state.profilebeta)
const {loading:loadingsubs,message:messagesubs,error:errorsubs}=useSelector(state=>state.subscribe)
 async function deletefromplaylist(id) {
  console.log(id)
 await dispatch(removeFromPlaylist(id))
   dispatch(getmyprofile())
}
async function changeimagesubmithandler(e,image){
  console.log(image)
     e.preventDefault()
     const myform=new FormData()
     myform.append("file",image)
   await dispatch(updateProfilePictureAction(myform))
    dispatch(getmyprofile())
}
function cancleSubscriptionHandler(){
      dispatch(cancleSubscription())
  }
  useEffect(()=>{
      if(error){
      toast.error(error)
      dispatch({type:"clearerror"})
    }
    if(message){
      toast.success(message)
      dispatch({type:"clearmessage"})
    }
    if(messagesubs){
      toast.success(messagesubs)
      dispatch(getmyprofile())
      dispatch({type:"clearmessage"})
    }
    if(errorsubs){
      toast.error(errorsubs)
      dispatch({type:"clearerror"})
    }
  },[dispatch,error,message,loadingsubs,messagesubs,errorsubs])



 const {isOpen,onClose,onOpen}=useDisclosure()
  return (
    <Container minH={'95vh'} maxW="container.lg" py={'4'}>
      <Heading children="PROFILE" m={'*'} />
      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems="center"
        spacing={['4', '8']}
        padding="4"
      >
        <VStack>
          <Avatar boxSize={'48'} src= {user.avatar.url}/>
          <Button onClick={onOpen} colorScheme={'blue'} variant="ghost">
            Change Photo
          </Button>
        </VStack>
        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="Name" fontWeight={'bold'} />
            <Text children={user.name} />
          </HStack>
          <HStack>
            <Text children="Email" fontWeight={'bold'} />
            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text children="Account Created At" fontWeight={'bold'} />
            <Text children={user.createdate.split('T')[0]} />
          </HStack>
          {user.role !== 'admin' && (
            <HStack>
              <Text children="Subscription Status : " />
              { user.subscription && user.subscription.status === 'active' ? (
                <Button isLoading={loadingsubs} onClick={cancleSubscriptionHandler} children="Cancle Subscription"></Button>
              ) : (
                <NavLink to="/subscribe">
                  <Button colorScheme={'blue'}>Subscribe</Button>
                </NavLink>
              )}
            </HStack>
          )}
          <Stack direction={['col', 'row']} alignItems="center">
            <NavLink to="/updateprofile">
              <Button>Update Profile</Button>
            </NavLink>
            <NavLink to="/changepassword">
              <Button>Change Password</Button>
            </NavLink>
          </Stack>
        </VStack>
      </Stack>

      <Heading children="Platlist" size={'md'} my="8" />
      {user.playlist.length > 0 ? (
        <Stack
          direction={['col', 'row']}
          alignItems="center"
          flexWrap={'wrap'}
          p="3"
        >
          {user.playlist.map((ele, index) => {
            return (
              <VStack width={'48'} m="2" key={ele.course}>
                <Image boxSize={'full'} objectFit="contain" src={ele.poster} />
                <HStack>
                  <NavLink to={`/course/${ele.course}`}>
                    <Button variant={'ghost'} colorScheme="blue">
                      Watch Now
                    </Button>
                  </NavLink>
                  <Button onClick={() => deletefromplaylist(ele.course)}>
                    <RiDeleteBin7Fill />
                  </Button>
                </HStack>
              </VStack>
            );
          })}
        </Stack>
      ):
      <Heading  display={"flex"} alignItems="center" justifyContent={"center"} size={"sm"} children="Playlist is Empty now...."/>
      }

      <Changeprofilephotobox loading={loading} isOpen={isOpen} onClose={onClose} changeimagesubmithandler={changeimagesubmithandler}/>
      
    </Container>
  );
};
function Changeprofilephotobox( {loading,isOpen,onClose,changeimagesubmithandler}){
  const [image,setimage]=useState("")
  const [imageprev,setimageprev]=useState("")
  function onclosehandler(){
    onClose()
    setimage("")
    setimageprev("")
  }
  function changeimagehandler(e){
    const file=e.target.files[0]
    const reader=new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend=()=>{
      setimageprev(reader.result)
      setimage(file)
    }
}


    return (
        <Modal isOpen={isOpen} onClose={onclosehandler}>
            <ModalOverlay backdropFilter={"blur(10px)"}/>
            <ModalContent>
              <ModalHeader>
                Change Photo
              </ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Container>
                        <form onSubmit={(e)=> changeimagesubmithandler(e,image) }>
                            <VStack spacing={"8"}>
                              {
                                imageprev &&   <Avatar src={imageprev} boxSize={"48"}/>
                              }
   
     <Input
     onChange={ changeimagehandler}
     type={"file"} css={{'&::file-selector-button ': editvalue}}/>
                     <Button isLoading={loading} w={"full"}
                     colorScheme="blue" type='submit'
                     >
                        Change
                     </Button>
                            </VStack>
                        </form>
                    </Container>
                </ModalBody>
                <ModalFooter>
                  <Button mr={"3"} onClick={onclosehandler} >
                    Cancle
                  </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default Profile;
