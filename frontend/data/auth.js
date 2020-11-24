import { useState } from 'react'
import fetcher, { endpoints } from './fetcher'

const signIn = (args = {}) => {
  const { email, password } = args 

  return fetcher
    .post(endpoints.SIGN_IN, { email, password })
    .then(response => response.data)
    .catch(error => {
      throw error
    })
}

const signUp = (args = {}) => {
  const { name, email, password, confirm } = args 

  if (password !== confirm) {
    throw new Error('The two passwords that you entered do not match!')
  }
  return fetcher
    .post(endpoints.SIGN_UP, { name, email, password })
    .then(response => response.data)
    .catch(error => {
      console.log(`⚠️   28 yelp » auth.js:28 > error`, error)

      throw error
    })
}

const signOut = () => {
  return fetcher
    .get(endpoints.SIGN_OUT)
    .then(response => response.data)
    .catch(error => {
      throw error
    })
}

export {
  signIn,
  signUp,
  signOut
}