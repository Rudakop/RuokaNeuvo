import { useContext } from 'react'
import { Rate } from 'antd'
import styles from './UserRate.module.css'
import { Actions, Context } from '@/store'

const UserRate = ({ rating = 0 }) => {
  const [state, dispatch] = useContext(Context)
  const user = state

  return (
    <Rate className={styles.userRate} value={rating} disabled={!user.logged}/>
  )
}

export default UserRate