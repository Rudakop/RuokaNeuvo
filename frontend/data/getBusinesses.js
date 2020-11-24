import { useState } from 'react'
import fetcher, { endpoints } from './fetcher'

const getBusinesses = (args = {}) => {
  const { location, limit = 20, offset = 0 } = args 

  return fetcher
    .get(endpoints.GET_BUSINESSES, { params: { 
      location: location || 'Finland',
      limit,
      offset
    }})
    .then(response => response.data)
    .catch(error => error)
}

export default getBusinesses