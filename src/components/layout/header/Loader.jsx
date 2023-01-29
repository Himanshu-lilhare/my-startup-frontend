import { Spinner, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
  <VStack h="100vh" justifyContent={"center"}  >
<div style={{transform:"scale(3)"}}>
<Spinner style={{color:"#4267B2"}} thickness='2px' speed='2s' emptyColor='transparent'
 size={"xl"}
>

</Spinner>
</div>
    </VStack>
  )
}

export default Loader