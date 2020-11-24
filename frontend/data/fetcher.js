import axios from 'axios'

const backendUri = process.env.NEXT_PUBLIC_BACKEND_URI

if (backendUri == null) {
  throw new Error ('The environment NEXT_PUBLIC_BACKEND_URI is missed!')
}

const instance = axios.create({
  baseURL: backendUri,
});

export default instance

// Backend endpoints

export const endpoints = {
  GET_BUSINESSES: '/businesses',
  SIGN_IN: '/sign_in',
  SIGN_UP: '/sign_up',
  SIGN_OUT: '/sign_out', 
}
