import { useEffect, useContext } from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
import { Actions, Context } from '@/store'
import { signIn } from '@/data/auth'

const LoginForm = ({formStates, changeFlowState}) => {
  const [state, dispatch] = useContext(Context)
 //onFinish requires a function callback instead of Promise
  const onFinish = (values) => {
    signIn(values)
      .then(response => {
        dispatch({type: Actions.SIGN_IN, payload: response})
      })
      .catch(error => {
        // Failed to sign in
      })
  }
  
  const handleSignUp = () => {
    changeFlowState(formStates.SIGN_UP)
  }

  return (
    <Form 
      layout='vertical'
      onFinish={onFinish}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Row justify='space-between' align='middle'>
          <Col>
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </Col>
          <Col>
            <Button type="link" onClick={handleSignUp}>
              Sign up
            </Button>
          </Col>
        </Row>
        
      </Form.Item>
    </Form>
  )
}

export default LoginForm