import { ColorModeScript } from '@chakra-ui/react';
// import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider,theme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { reduxstore } from './redux/reduxstore';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  // <StrictMode>
  <Provider store={reduxstore}>
<ChakraProvider theme={theme}>
    <ColorModeScript />
    <App />
  
</ChakraProvider>
</Provider>
// {/* </StrictMode> */}
);


