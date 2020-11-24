import { useEffect, useContext } from 'react'
import styles from "./index.module.css"
import { Context } from '@/store'

import Businesses from '@/components/Businesses'

const MainPage = () => {
  const [state, dispatch] = useContext(Context)

  return <>
    <Businesses/>
  </>

};

export default MainPage