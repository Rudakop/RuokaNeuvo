import { useEffect, useState, useContext } from 'react'
import { Alert, Form, Button, Input, Row, Col } from 'antd'
import { Actions, Context } from '@/store'
import { signUp } from '@/data/auth'

const SignUpForm = ({formStates, changeFlowState}) => {
  const [state, dispatch] = useContext(Context)
  const [submitErrorMessage, setSubmitErrorMessage] = useState(null)

  const onFinish = (values) => {
    signUp(values)
      .then(response => {
        dispatch({type: Actions.SIGN_UP, payload: response})
      })
      .catch(error => {
        setSubmitErrorMessage('Email or password is wrong! Try again.')
        console.log(error)
      })
  }

  const handleSignIn = () => {
    changeFlowState(formStates.SIGN_IN)
  }

  const handleCleanErrorMessage = () => {
    setSubmitErrorMessage(null)
  }

  return (
    <Form 
      layout='vertical'
      onFinish={onFinish}
    >
      {submitErrorMessage && <Alert 
        type="error" 
        closable
        onClose={handleCleanErrorMessage}
        message={submitErrorMessage}
      />}
      <Form.Item 
        name="name"
        label="Name"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your Name',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item 
        name="email"
        label="E-mail"
        hasFeedback
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item 
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password/>
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Row justify='space-between' align='middle'>
          <Col>
            <Button 
              type="primary" 
              htmlType="submit"
              disabled={submitErrorMessage !== null}
            >
              Register
            </Button>
          </Col>
          <Col>
            <Button type="link" onClick={handleSignIn}>
              Sign in
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  )
}

export default SignUpForm