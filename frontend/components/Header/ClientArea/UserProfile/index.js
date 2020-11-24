import { useContext} from 'react'
import { Actions, Context } from '@/store'
import { Form, Input, Button} from 'antd'
import styles from './index.module.css'
import { signOut } from '@/data/auth'

const UserProfile = () => {
  const [state, dispatch] = useContext(Context)
  const initFormData = {
  name
  } = state.user.profile || {}

  const handleSignOut = () => {
    signOut()
      .then(response => {
        dispatch({type: Actions.SIGN_OUT, payload: response})
      })
      .catch(error => {
        // Failed to sign in
      })
  }

  return (
    <Form 
      layout='vertical'
      initialValues={initFormData}
    >
      <Form.Item 
        label="Email"
        name="email"
      >
        <Input disabled/>
      </Form.Item>

      <Form.Item
        label="Name"
        name="name"
      >
        <Input disabled/>
      </Form.Item>
      
      <Form.Item>
        <Button className={styles.logoutButton} onClick={handleSignOut}>Log out</Button>
      </Form.Item>
    </Form>
  )
}

export default UserProfile