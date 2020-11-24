import {useContext} from 'react'
import {Form, Input, Button} from 'antd'
import { Actions, Context } from '@/store'

const SearchBar = () => {
  const [state, dispatch] = useContext(Context)

  const onFinish = (value) => {
    dispatch({type: Actions.SET_LOCATION, payload: value })
  }

  return (
    <Form
      name='search'
      layout='inline'
      onFinish={onFinish}
    >
      <Form.Item name='location'>
        <Input
          allowClear
          placeholder="Enter restaurant's name"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </Form.Item>
    </Form>
  )
}

export default SearchBar