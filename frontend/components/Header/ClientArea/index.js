import { useState, useEffect, useContext } from 'react'
import { Actions, Context } from '@/store'
import { Modal, Button } from 'antd'
import { LockFilled, UnlockFilled } from '@ant-design/icons'
import LoginForm from './LoginForm'
import UserProfile from './UserProfile'
import SignUpFrom from './SignUpForm'

const formStates = {
  SIGN_IN: 'SIGN_IN',
  SIGN_UP: 'SIGN_UP',
  USER_PROFILE: 'USER_PROFILE'
}

const titles = {
  SIGN_IN: 'Sing in',
  SIGN_UP: 'Sign up',
  USER_PROFILE: 'User profile'
}

const ClientArea = function() {
  const [state, dispatch] = useContext(Context)
  const [ flowState, setFlowState ] = useState(formStates.SIGN_IN)
  const [ showModal, setShowModal ] = useState(false)
  const { user } = state

  const onClick = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)

    if (user.logged) {
      setFlowState(formStates.USER_PROFILE)
    } else {
      setFlowState(formStates.SIGN_IN)
    }
  }

  useEffect(()=> {
    if (user.logged) {
      setShowModal(false)
      setFlowState(formStates.USER_PROFILE)
    } else {
      setFlowState(formStates.SIGN_IN)
    }
  }, [ user.logged ])

  return (
    <>
      <Button onClick={onClick}>
        Client Area
        {
          user.logged && <UnlockFilled />
        }
        {
          !user.logged && <LockFilled />
        }
      </Button>
      <Modal
        title={titles[flowState]}
        visible={showModal}
        centered
        onCancel={handleCloseModal}
        footer={null}
      >
        {formStates.SIGN_IN === flowState && <LoginForm formStates={formStates} changeFlowState={setFlowState}/>}
        {formStates.SIGN_UP === flowState && <SignUpFrom formStates={formStates} changeFlowState={setFlowState}/>}
        {formStates.USER_PROFILE === flowState && <UserProfile/>}
      </Modal>
    </>
  )
}

export default ClientArea