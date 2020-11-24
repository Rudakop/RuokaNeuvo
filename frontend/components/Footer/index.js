import { Row, Col} from 'antd'
import Logo from '../Logo'

import styles from './footer.module.css'
import {FacebookOutlined, InstagramOutlined, MailOutlined} from '@ant-design/icons'
const Footer = () => {
  return (
    <Row className={styles.footer} justify="center" gutters={8} align='middle'>
      <Col span={1}>
        <Logo/>
      </Col>
      
      <Col span={4}>
        The best DB of the restaurants
      </Col>
      
      <Col span={6} className={styles.followUs}>
        <Row gutters={8} justify='center'>
          <Col span={5}>Follow us:</Col>
          <Col span={2}><FacebookOutlined  className={styles.icon}/></Col>
          <Col span={2}><InstagramOutlined className={styles.icon}/></Col>
          <Col span={2}><MailOutlined      className={styles.icon}/></Col>
        </Row>
      </Col>
      
      <Col span={2}>
        Contacts
      </Col>
    </Row>
  
  )
}

export default Footer
