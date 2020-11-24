import { useEffect, useState, useContext } from 'react'
import { Actions, Context } from '@/store'
import getBusinesses from '@/data/getBusinesses'
import BusinessCard from './BusinessCard'
import { Typography, Button } from 'antd'

import styles from './index.module.css'
const { Title } = Typography

const Businesses = () => {
  const [state, dispatch] = useContext(Context)
  const [ bComponents, setBComponents] = useState(null)

  const loadMore = () => {
    dispatch({type: Actions.LOAD_MORE }) 
  }

  // Fetch businesses from Yelp through our backend
  useEffect(() => {
    getBusinesses({
      location: state.location,
      limit: state.limit,
      offset: state.offset
    }).then((data) => {
      dispatch({type: Actions.SET_BUSINESSES, payload: data })
    })
  }, [ state.location ])

  // Load more
  useEffect(() => {
    if (state.offset !== 0) {

      getBusinesses({
        location: state.location,
        limit: state.limit,
        offset: state.offset
      }).then((data) => {
        dispatch({type: Actions.APPEND_BUSINESSES, payload: data })
      })
    }
  }, [ state.offset ])

  useEffect(() => {
    if (state.businesses && Array.isArray(state.businesses)) {
      const components = state.businesses.map((component => {
        return <BusinessCard key={component.id} data={component}/>
      }))

      setBComponents(components)
    }
  }, [state.businesses])

  return (
    <div className={styles.cardContainer}>
      <Title className={styles.title} level={2}>Save money. We search 50+ sites for the best restaurant prices</Title>
      {bComponents}
      
      {
        state.total > state.offset && 
        <div className={styles.basis100}>
          <Button className={styles.moreButton} type="primary" onClick={loadMore}>More</Button>
        </div>
      }
    </div>
  )
}

export default Businesses