import Image from 'next/image'
import styles from './Cover.module.css'
import { PictureTwoTone } from '@ant-design/icons'

const Cover = ({ src }) => {

  if ( src == null || src.length === 0 ) {
    return <PictureTwoTone className={styles.noImageIcon}/>
  }

  return (
    <Image className={styles.cover} src={src} width='260px' height='260px'/>
  )
}

export default Cover