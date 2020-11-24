import { useState, useEffect } from 'react'
import { Card } from "antd";
import styles from "./BusinessCard.module.css";
import Cover from './Cover'
import UserRate from './UserRate'
const { Meta } = Card;

const BusinessCard = ({ data }) => {
  const [address, setAddress] = useState([])

  const { name, image_url, location, rating } = data

  useEffect(() => {
    if (location) {
      const addComponents = location.display_address.map((line, index) => {
        return <p key={index}>{line}</p>
      })
      
      setAddress(addComponents)
    }
  }, [ location ])

  return (
    <div className={styles.cardWrapper}>
      <Card
        className={styles.card}
        cover={<Cover src={image_url} />}
      >
        <h1 className={styles.title}>{name}</h1>
        <div className={styles.address}>{address}</div>
        <UserRate rating={rating}/>
      </Card>
    </div>
  );
};

export default BusinessCard;
