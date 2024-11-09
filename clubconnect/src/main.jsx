import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import './index.css'
import App from './App.jsx'
import.meta.env.VITE_URI
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const server = new ApolloClient({
  uri: import.meta.env.VITE_URI,
  cache: new InMemoryCache(),
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </StrictMode>,
)
